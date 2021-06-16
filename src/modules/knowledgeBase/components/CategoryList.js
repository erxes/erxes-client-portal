import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../../assets/images/avatar-colored.svg";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Categories extends React.Component {
  renderAuthors = (authors) => {
    if (authors.length > 3) {
      return (
        <>
          {authors.slice(0, 3).map((user, index) => (
            <o key={index}>{user.details.fullName},</o>
          ))}
          <o> and {authors.length - 3} other </o>
        </>
      );
    }

    return authors.map((author, index) => (
      <ol key={index}>
        {author.details.fullName}
        {authors.length > 1 && ", "}
      </ol>
    ));
  };

  renderAvatars = (cat) => {
    return (
      <div className="avatars">
        {cat.authors.map((author, index) => (
          <img
            key={index}
            className="round-img"
            alt={author.details.fullName}
            src={
              (author.details.avatar || []).length === 0
                ? Avatar
                : author.details.avatar
            }
            width="34"
            height="34"
          />
        ))}
        <div className="avatar-info">
          <div>
            <div className="darker">{cat.numOfArticles}</div> articles in this
            category{" "}
          </div>
          <div>
            <div className="darker">Written by: </div>
            {this.renderAuthors(cat.authors)}
          </div>
        </div>
      </div>
    );
  };

  renderForm(name, formId) {
    const { color } = this.props.kbTopic || {};

    return (
      <Card>
        <div className="tab-content">
          <h5>{name}</h5>
        </div>
        <Button
          variant="outline-primary"
          data-erxes-modal={formId}
          style={{ color, borderColor: color }}
        >
          Дэлгэрэнгүй
        </Button>
      </Card>
    );
  }

  renderChildCategories = (categories, url) => {
    if (!categories || categories.length === 0) {
      return null;
    }

    const detail = (cat) => {
      return (
        <Link
          to={`${url}${cat._id}`}
          className="d-flex flex-column align-items-center w-100"
        >
          <div className="icon-wrapper">
            <i className={`icon-${cat.icon}`}></i>
          </div>
          <div className="tab-content">
            <h5>{cat.title}</h5>
            <div className="description">
              <p>{cat.description}</p>
            </div>
          </div>
        </Link>
      );
    };

    return categories.map((cat) => {
      if (cat.numOfArticles === 0) {
        return null;
      }

      return (
        <Col md={4} key={cat._id}>
          <Card className="category-item">{detail(cat)}</Card>
        </Col>
      );
    });
  };

  render() {
    const { kbTopic } = this.props;
    const { parentCategories = [] } = kbTopic;

    const categoryUrl = `/knowledge-base/category/details/`;

    return (
      <>
        <Container className="knowledge-base promoted" fluid="sm">
          <div className="category-knowledge-list">
            <h2 className="list-category-title">1. САНАЛ ХҮСЭЛТ</h2>
            <div className="promoted-wrap forms">
              {this.renderForm(
                "Ажилтан, үйл ажиллагаатай холбоотой санал хүсэлт",
                "ThgJPg"
              )}
              {this.renderForm("Гомдлын үл тохирлын маягт", "xKQ7FT")}
              {this.renderForm("Торхтой шар айрагны маягт", "obAZPp")}
            </div>
          </div>
        </Container>

        {parentCategories.map((parentCat) => (
          <Container className="knowledge-base" fluid="sm" key={parentCat._id}>
            <div className="category-knowledge-list">
              <h2 className="list-category-title">
                <Link to={`${categoryUrl}${parentCat._id}`}>
                  {parentCat.title}
                </Link>
              </h2>
              <Row>
                {this.renderChildCategories(parentCat.childrens, categoryUrl)}
              </Row>
            </div>
          </Container>
        ))}
      </>
    );
  }
}

Categories.propTypes = {
  kbTopic: PropTypes.object,
  articlesQuery: PropTypes.object,
};

export default Categories;
