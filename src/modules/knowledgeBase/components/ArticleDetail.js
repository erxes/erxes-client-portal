import React from "react";
import classNames from "classnames";
import * as dayjs from "dayjs";
import { Link } from "react-router-dom";
import Scrollspy from 'react-scrollspy';
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";


class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeReaction: "",
    };
  }

  onReactionClick = (reactionChoice) => {
    this.setState({ activeReaction: reactionChoice });
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

    const reactionClassess = classNames("reactions", {
      clicked: this.state.activeReaction,
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
                    ? "active"
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
                  " MMM D YYYY"
                )}
              </span>
            </div>
          </Col>
        </div>
      </div>
    );
  };

  isActive = (articleId) => {
    if (articleId === this.props.articleDetail._id) {
      return "active";
    }
    return;
  };

  renderCategories = () => {
    //const { categories } = this.props.kbTopic.categories;
    const { category } = this.props;
    const { articles } = category;

    if (articles) {
      return (
        <>
          <div className="tags sidebar-list">
            <ul>
              <li className={this.isActive(category._id)}>
                <div className="sidebar-item">
                  <div className="icon-wrapper">
                    <i className={`icon-${category.icon}`}></i>
                  </div>
                  <h6>{category.title}</h6>
                </div>
                <div className="submenu">
                  <ul>
                    {articles.map((article) => (
                      <Link
                        key={article._id}
                        to={`/knowledge-base/article/detail?catId=${category._id}&_id=${article._id}`}
                      >
                        <li className={this.isActive(article._id)}>
                          <h6>{article.title}</h6>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </>
      );
    }
    return;
  };

  renderTags = () => {
    const { content } = this.props.articleDetail;
    const tagged = [];

    //find custom selected elements
    if (content && content.match(/<h2 id="(.*?)">(.*?)<\/h2>/g)) {
      content.match(/<h2 id="(.*?)">(.*?)<\/h2>/g).map((obj, i) => (
        tagged.push(obj)
      ));
    }

    let tagedTitles = [];
    if (tagged.length === 0) {
      return null;
    }
    const relId = [];
    for (let item of tagged) {
      tagedTitles.push(item);
      const getId = item.match(/id="(.*?)"/g)[0];      
      relId.push(getId.replaceAll('"','').split('=')[1]);      
    }
    console.log(relId);
    return (
      <>
        <div className="page-anchor" id="anchorTag">
          <h6>Холбоос</h6>
          <Scrollspy items={relId} currentClassName="active">
            {tagedTitles.map((val, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: val }} />
            ))}
          </Scrollspy>
        </div>
      </>
    )
  };



  render() {
    const { articleDetail } = this.props;

    return (
      <div className="knowledge-base">        
        <Row>
          <Col md={3}>
            <div className="sidebar-wrap">
              <Link to={`/knowledge-base`}>
                <h3 className="sidebar-type-title">knowledge base</h3>
              </Link>
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
                      __html: articleDetail.content,
                    }}
                  />
                </div>
              </div>
              {this.renderReactions()}
            </div>
          </Col>
          <Col md={2}>
            {this.renderTags()}
          </Col>
        </Row>
      </div >
    );
  }
}

Detail.propTypes = {
  kbTopic: PropTypes.object,
};

export default Detail;
