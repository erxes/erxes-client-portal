import * as dayjs from "dayjs";

import { Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import Scrollspy from "react-scrollspy";
import SectionHeader from "../../common/components/SectionHeader";
import classNames from "classnames";

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeReaction: "",
      toggle: false,
      nextFirstId: "0",
    };
  }

  onReactionClick = (reactionChoice) => {
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

  isActiveCategory = (categoryId) => {
    const { category } = this.props;
    const catId = category._id;
    if (categoryId === catId) {
      return "active";
    }
    return;
  };

  createDom = () => {
    const articleDetail = this.props.articleDetail;
    if (!articleDetail) {
      return null;
    }
    const content = articleDetail.content;
    const dom = new DOMParser().parseFromString(content, "text/html");
    return dom;
  };

  renderCategories = () => {
    const { kbTopic } = this.props;
    const categories = kbTopic.parentCategories;

    if (!categories || categories.length === 0) {
      return null;
    }

    const renderCategory = (category) => {
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
                {category.childrens && (
                  <i className={`icon-${category.icon}`} />
                )}
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
            {categories.reverse().map((category) => {
              return (
                <>
                  {renderCategory(category)}
                  {category.childrens && (
                    <div className="sub-categories">
                      {category.childrens.map((child) => renderCategory(child))}
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

  renderArticles = (categoryId) => {
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

  renderTags = (dom) => {
    const nodes = dom.getElementsByTagName("h2");
    const tagged = [];

    const addId = (array, isTag) => {
      return array.forEach((el) => {
        let taggedItem;
        if (el.lastChild.innerText) {
          el.children.length > 0
            ? (taggedItem = el.lastChild.innerText.replace(/&nbsp;/gi, ""))
            : (taggedItem = el.innerText.replace(/&nbsp;/gi, ""));

          el.setAttribute("id", taggedItem);
          isTag && tagged.push(taggedItem);
        }
      });
    };

    const h2Array = document.getElementsByTagName("h2");
    addId([...nodes], true);
    addId([...h2Array], false);

    if (nodes.length === 0) {
      return null;
    }
    return (
      <div className="page-anchor" id="anchorTag">
        <h6>GO TO PAGE </h6>
        <Scrollspy items={tagged} currentClassName="active">
          {tagged.map((val, index) => (
            <li key={index}>
              <a href={`#${val}`}>{val}</a>
            </li>
          ))}
        </Scrollspy>
      </div>
    );
  };

  showImageModal = (e) => {
    const img = e.target.closest("img");
    const modalImg = document.getElementById("modal-content");
    const modal = document.getElementById("modal");

    if (img && e.currentTarget.contains(img)) {
      modalImg.src = img.src;
      modal.style.display = "flex";
    }
  };

  handleModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  };

  renderContent = (articleDetail) => {
    if (this.props.articleDetail._id === "t6uZTbRkjMZaBhBiP") {
      return (
        <div
          data-erxes-embed="vQyp4C"
          style={{ width: "100%" }}
        ></div>
      );
    }

    if (this.props.articleDetail._id === "gtmXduDJm7uPMBBS6") {
      return (
        <div
          data-erxes-embed="Lsk4vq"
          style={{ width: "100%" }}
        ></div>
      );
    }

    if (this.props.articleDetail._id === "9W9K59dx9CGnHobQi") {
      return (
        <div
          data-erxes-embed="SRsHPN"
          style={{ width: "100%" }}
        ></div>
      );
    }

    return (
      <div className="kbase-detail kbase-lists">
        <h4>{articleDetail.title}</h4>
        <div className="content mt-4" id="contentText">
          <p>{articleDetail.summary}</p>
          <div
            className="article"
            onClick={this.showImageModal}
            dangerouslySetInnerHTML={{
              __html: articleDetail.content,
            }}
          ></div>
          <div onClick={this.handleModal} id="modal">
            <span id="close">&times;</span>
            <img id="modal-content" alt="modal" />
          </div>
        </div>
      </div>
    );
  };

  render() {
    const { articleDetail, category, kbTopic } = this.props;
    const dom = this.createDom();
    return (
      <div className="knowledge-base">
        <Row>
          <div className="ml-30p">
            <SectionHeader
              categories={kbTopic.parentCategories}
              selectedCat={category}
            />
          </div>
        </Row>
        <Row>
          <Col md={3}>
            <div className="sidebar-wrap">{this.renderCategories()}</div>
          </Col>
          <Col md={7}>
            <div className="card article-detail">
              {this.renderContent(articleDetail)}
              {this.renderReactions()}
            </div>
          </Col>
          <Col md={2}>{this.renderTags(dom)}</Col>
        </Row>
      </div>
    );
  }
}

Detail.propTypes = {
  kbTopic: PropTypes.object,
};

export default Detail;
