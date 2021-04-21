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

  renderCategories = () => {
    const { kbTopic } = this.props;
    const { categories } = kbTopic;

    if (categories) {
      return categories.map((cat) => {
        return (
          <Col md={12} key={cat._id}>
            <Card className="category-item">
              <Link to={`/knowledge-base/category/details/${cat._id}`}>
                <Row>
                  <Col md={2} key={cat._id}>
                    <div className="icon-wrapper">
                      <i className={`icon-${cat.icon}`}></i>
                    </div>
                  </Col>
                  <Col md={10} key={cat._id}>
                    <div className="tab-content">
                      <h5>{cat.title}</h5>
                      <p>{cat.description}</p>
                      {this.renderAvatars(cat)}
                    </div>
                  </Col>
                </Row>
              </Link>
            </Card>
          </Col>
        );
      });
    }
    return;
  };

  render() {
    return (
      <Container className="knowledge-base" fluid="sm">
        <Row>{this.renderCategories()}</Row>
        <Container fluid="sm">
          <section className="video align-center">
            <h4>Видео хичээл</h4>
            <p className="desc">
              Бидэнд танд туслах олон видео хичээл байна. Манай Youtube суваг
              дээрх
              <a
                href="https://www.youtube.com/watch?v=sDzPEEBSp44&feature=youtu.be&list=PLwRYODuwm31sVRr8NjPZJIM-idMQETizz&ab_channel=erxesInc"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;бүх жагсаалтыг&nbsp;
              </a>
              үзэх эсвэл энэ видеоны зүүн дээд буланд байгаа товчлуур дээр
              дарахаа мартуузай.
            </p>
            <iframe
              width="80%"
              height="450"
              title="erxes-list"
              src="https://www.youtube.com/embed/videoseries?list=PLwRYODuwm31sVRr8NjPZJIM-idMQETizz"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
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
