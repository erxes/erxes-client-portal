import React from "react";
import classNames from "classnames";
import * as dayjs from "dayjs";
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import SectionHeader from "../../common/components/SectionHeader";

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeReaction: "",
      toggle: false,
      nextFirstId: "0",
    };
  }

  componentDidMount() {
    if (this.props.articleDetail._id === "ygH5XgEbgGEj7tHaR") {
      window.erxesSettings.form = {
        brand_id: "ASJrzQ",
        form_id: "TvEwRy",
      };
    }

    if (this.props.articleDetail._id === "bHWwCSu5oG5Xcvt9o") {
      window.erxesSettings.form = {
        brand_id: "ASJrzQ",
        form_id: "oDKqhS",
      };
    }
    console.log(window.erxesSettings);
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
    const { parentCategories } = kbTopic;
    const renderCategory = (cat) => {
      return (
        <Link key={cat._id} to={`/knowledge-base/category/details/${cat._id}`}>
          <div className="tags sidebar-list">
            <ul>
              <li className={this.isActive(cat._id)}>
                <div className="sidebar-item">
                  <div className="icon-wrapper">
                    {cat.childrens && <i className={`icon-${cat.icon}`} />}
                    {cat.title}
                  </div>

                  <div>
                    <span>{`(${cat.numOfArticles})`}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Link>
      );
    };

    if (parentCategories) {
      return (
        <>
          {parentCategories.map((cat) => {
            return (
              <>
                {renderCategory(cat)}
                {cat.childrens && (
                  <div className="sub-categories">
                    {cat.childrens.map((child) => renderCategory(child))}
                  </div>
                )}
              </>
            );
          })}
        </>
      );
    }
    return;
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

  renderTags = () => {
    const dom = this.createDom();
    const nodes = dom.getElementsByTagName("h2");

    if (nodes.length === 0) {
      return null;
    }

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

    return (
      <div className="page-anchor" id="anchorTag">
        <h6>ХОЛБООС </h6>
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
      modalImg.alt = img.alt;
      modal.style.display = "block";
    }
  };

  handleModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  };

  renderContent = (articleDetail) => {
    if (articleDetail._id === "ygH5XgEbgGEj7tHaR") {
      return (
        <div
          data-erxes-embed="TvEwRy"
          style={{ width: "100%", height: "300px" }}
        ></div>
      );
    }
    if (articleDetail._id === "bHWwCSu5oG5Xcvt9o") {
      return (
        <div
          data-erxes-embed="oDKqhS"
          style={{ width: "100%", height: "300px" }}
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
    const { category, kbTopic, articleDetail } = this.props;

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
          <Col md={2}>{this.renderTags()}</Col>
        </Row>
      </div>
    );
  }
}

class Form extends React.Component {
  componentDidMount() {
    (() => {
      const form = document.createElement("script");
      form.src = "https://w.office.erxes.io/build/formWidget.bundle.js";
      form.async = true;
      form.key = Math.random().toString();
      const ent = document.getElementsByTagName("script")[0];
      ent.parentNode.insertBefore(form, ent);
    })();
  }

  render() {
    return (
      <div
        className="article"
        dangerouslySetInnerHTML={{
          __html: this.props.form,
        }}
      ></div>
    );
  }
}

Detail.propTypes = {
  kbTopic: PropTypes.object,
};

export default Detail;
