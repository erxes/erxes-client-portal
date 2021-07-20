import React from 'react';
import classNames from 'classnames';
import * as dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import SectionHeader from "../../common/components/SectionHeader"

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeReaction: '',
      toggle: false,
      nextFirstId: '0'
    };
  }

  onReactionClick = reactionChoice => {
    this.setState({ activeReaction: reactionChoice });
  };

  onToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  getUserDetails = () => {
    const { articleDetail } = this.props;
    const { createdUser } = articleDetail;
    const { details } = createdUser;
    const authorDetails = details;
    return authorDetails;
  };

  renderReactions() {
    const { articleDetail } = this.props;

    if (
      !articleDetail ||
      (articleDetail.reactionChoices &&
        articleDetail.reactionChoices.length === 0)
    ) {
      return null;
    }

    const reactionClassess = classNames('reactions', {
      clicked: this.state.activeReaction
    });

    return (
      <div className="feedback">
        <div className={reactionClassess}>
          {(articleDetail.reactionChoices || []).map(
            (reactionChoice, index) => (
              <span
                key={index}
                className={
                  reactionChoice === this.state.activeReaction
                    ? 'active'
                    : undefined
                }
                onClick={this.onReactionClick.bind(this, reactionChoice)}
              >
                <img alt={index} src={reactionChoice} />
              </span>
            )
          )}
        </div>
      </div>
    );
  }

  avatarDetail = () => {
    return (
      <div className="avatarDetails avatars">
        <div className="detail avatar-info">
          <img
            className="round-img"
            alt={this.getUserDetails().fullName}
            src={this.getUserDetails().avatar}
            width="42px"
            height="42px"
          />

          <Col>
            <div> Written by: {this.getUserDetails().fullName}</div>

            <div>
              Modified:
              <span>
                {dayjs(this.props.articleDetail.modifiedDate).format(
                  ' MMM D YYYY'
                )}
              </span>
            </div>
          </Col>
        </div>
      </div>
    );
  };

  isActive = articleId => {
    if (articleId === this.props.articleDetail._id) {
      return 'active';
    }
    return;
  };

  isActiveCategory = categoryId => {
    const { category } = this.props;
    const catId = category._id;
    if (categoryId === catId) {
      return 'active';
    }
    return;
  };

  renderCategories = () => {
    const { kbTopic } = this.props;
    const categories = kbTopic.parentCategories;

    if (!categories || categories.length === 0) {
      return null;
    }

    const renderCategory = category => {
      const url = `/knowledge-base/category/details/${category._id}`;

      return (
        <li key={category._id} className={this.isActiveCategory(category._id)}>
          <Link
            to={
              category.articles && category.articles.length > 0
                ? `${url}&_id=${category.articles[0]._id}`
                : url
            }
          >
            <div className="sidebar-item">
              <div className="icon-wrapper">
                {category.childrens &&  <i className={`icon-${category.icon}`}/>}
              </div>
              <h6>{category.title}</h6>
              <span>{`(${category.numOfArticles})`}</span>
            </div>
          </Link>
          {this.renderArticles(category._id)}
        </li>
      );
    };

    return (
      <>
        <div className="tags sidebar-list">
          <ul>
            {categories.map(category => {
              return (
                <>
                  {renderCategory(category)}
                  {category.childrens && (
                    <div className="sub-categories">
                      {category.childrens.map(child => renderCategory(child))}
                    </div>
                  )}
                </>
              );
            })}
          </ul>
        </div>
      </>
    );
  };

  renderArticles = categoryId => {
    const { category } = this.props;
    const { articles } = category;

    if (!articles || !articles.length === 0 || category._id !== categoryId) {
      return null;
    }

    return (
      <div className="submenu">
        <ul>
          {articles.map((article, index) => (
            <li key={index} className={this.isActive(article._id)}>
              <Link
                to={`/knowledge-base/article/detail?catId=${category._id}&_id=${article._id}`}
              >
                <div>{article.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  renderTags = () => {
    const  articleDetail  = this.props.articleDetail;

    if (!articleDetail) {
      return null;
    }
    const content  = articleDetail.content;
    const tagged = [];
    const regex =  /<h[1-6]>(.*?)<\/h[1-6]>/g;
    if (
      !content.length ||
      !content.match(regex)
    ) {
      return null;
    }

    content
      .match(regex)
      .map((obj) => tagged.push(
        obj.replace(/<[^>]*>?/gm, '')
        ));

    if(tagged.length === 0){
        return null;
    }
    const  h2Array = [...document.querySelectorAll("h1, h2, h3, h4, h5, h6")];
    h2Array.map( (el)=>
      el.setAttribute("id",el.innerText))
    return (
      <>
        <div className="page-anchor" id="anchorTag">
          <h6>Холбоос</h6>
          <Scrollspy items={tagged} currentClassName="active">
            {tagged.map((val, index) => (

              <li key={index} > 
                 <a href={`#${val}`} >
                 {val}
                 </a>
              </li>
            ))}
          </Scrollspy>
        </div>
      </>
    );
  };

  
  render() {
    const { articleDetail, category, kbTopic } = this.props;
    
    return (
      <div className="knowledge-base">
        <Row>
          <div className="ml-30p">
          <SectionHeader categories={kbTopic.parentCategories} selectedCat ={category} />
          </div>
        </Row>
        <Row>
          <Col md={3}>
            <div className="sidebar-wrap">
              {this.renderCategories()}
            </div>
          </Col>
          <Col md={7}>
            <div className="card article-detail">
              <div className="kbase-detail kbase-lists">
                <h4>{articleDetail.title}</h4>
                <div className="content mt-4" id="contentText">
                  <p>{articleDetail.summary}</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: articleDetail.content
                    }}
                  />
                </div>
              </div>
              {this.renderReactions()}
            </div>
          </Col>
          <Col md={2} >{this.renderTags()}</Col>
        </Row>
      </div>
    );
  }
}

Detail.propTypes = {
  kbTopic: PropTypes.object
};

export default Detail;
