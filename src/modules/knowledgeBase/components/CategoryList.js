import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../../assets/images/avatar-colored.svg";
import { Container, Row, Col, Card } from "react-bootstrap";
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
      <o key={index}>
        {author.details.fullName}
        {authors.length > 1 && ", "}
      </o>
    ));
  };

  renderAvatars = (cat) => {
    if (!cat.authors || cat.authors.length === 0) {
      return null;
    }

    return (
      <div className="avatars">
        {cat.authors.map((author, index) => (
          <img
            key={index}
            className="round-img"
            alt={author.details.fullName}
            src={
              author.details.avatar.length === 0
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
            category
          </div>
          <div>
            <div className="darker">Written by: </div>
            {this.renderAuthors(cat.authors)}
          </div>
        </div>
      </div>
    );
  };

  renderSubCategories = (categories) => {
    return categories.map((child) => (
      <Col key={child._id} md={4}>
        <Card className="category-box">
          <Link to={`/knowledge-base/category/details/${child._id}`}>
            <Row>
              <Col md={2} key={child._id}>
                <div className="icon-wrapper">
                  <i className={`icon-${child.icon}`}></i>
                </div>
              </Col>
              <Col md={10} key={child._id}>
                <div className="tab-content">
                  <h5>{child.title}</h5>
                  <p>{child.description}</p>
                  {this.renderAvatars(child)}
                </div>
              </Col>
            </Row>
          </Link>
        </Card>
      </Col>
    ));
  };

  renderCategories = () => {
    const { kbTopic } = this.props;
    const categories = kbTopic.parentCategories;

    if (!categories || categories.length === 0) {
      return null;
    }

    return categories.map((cat) => (
      <div key={cat._id}>
        <h4>{cat.title}</h4>
        {cat.childrens && <Row>{this.renderSubCategories(cat.childrens)}</Row>}
      </div>
    ));
  };

  render() {
    return (
      <Container className="knowledge-base" fluid="sm">
        <div className="category-wrapper">{this.renderCategories()}</div>
        <Container fluid="sm">
          <section className="video align-center">
            <h4>Video tutorials</h4>
            <p className="desc">
              For those visual learners, we have a full playlist of video
              tutorials to help you onboard. Make sure you check out the
              <a
                href="https://www.youtube.com/watch?v=sDzPEEBSp44&feature=youtu.be&list=PLwRYODuwm31sVRr8NjPZJIM-idMQETizz&ab_channel=erxesInc"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;full playlist&nbsp;
              </a>
              on our Youtube channel or click the button on the top left corner
              of this video.
            </p>
            <iframe
              width="80%"
              height="450"
              title="erxes-list"
              src="https://www.youtube.com/embed/videoseries?list=PLwRYODuwm31sVRr8NjPZJIM-idMQETizz"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="allowfullscreen"
            ></iframe>
          </section>
        </Container>
      </Container>
    );
  }
}

Categories.propTypes = {
  kbTopic: PropTypes.object,
  articlesQuery: PropTypes.object,
};

export default Categories;
