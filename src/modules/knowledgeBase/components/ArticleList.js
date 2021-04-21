import React from "react";
import * as dayjs from "dayjs";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Lists extends React.Component {
  renderSearchResult = () => {
    const { searchValue, articles } = this.props;

    if (!searchValue) {
      return null;
    }

    if (articles.length === 0) {
      return (
        <span className="search-result">
          Илэрц олдсонгүй: <b>{searchValue}</b>
        </span>
      );
    }

    return (
      <span className="search-result">
        Хайлтын илэрц: <b>{searchValue}</b>
      </span>
    );
  };

  render() {
    const { articles, catId } = this.props;

    return (
      <Container className="knowledge-base" fluid="sm">
        <Row>
          <Col>
            {this.renderSearchResult()}
            {articles.map((article) => (
              <Link
                to={`/knowledge-base/article/detail?catId=${catId}&_id=${article._id}`}
                key={article._id}
              >
                <div className="kbase-lists card tab-content">
                  <h5>{article.title}</h5>
                  <p>{article.summary}</p>
                  <div className="avatars">
                    <img
                      className="round-img"
                      alt={article.createdUser.details.fullName}
                      src={article.createdUser.details.avatar}
                      width="34"
                      height="34"
                    />
                    <div className="avatar-info">
                      <div>
                        Нийтэлсэн{" "}
                        <span>{article.createdUser.details.fullName}</span>
                      </div>
                      <div>
                        Өөрчилсөн{" "}
                        <span>
                          {dayjs(article.modifiedDate).format("MMM D YYYY")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

Lists.propTypes = {
  articles: PropTypes.array,
};

export default Lists;
