import React from 'react';
import * as dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Lists extends React.Component {
  renderSearchResult = () => {
    const { searchValue, articles } = this.props;

    if (!searchValue) {
      return null;
    }

    if (articles.length === 0) {
      return (
        <span className="search-reuslt">
          We couldn't find any articles for: <b>{searchValue}</b>
        </span>
      );
    }

    return (
      <span className="search-reuslt">
        Search result for: <b>{searchValue}</b>
      </span>
    );
  };

  render() {
    return (
      <Container className="knowledge-base">
        <Row>
          <Col>
            {this.renderSearchResult()}
            {this.props.articles.map((article) => (
              <Link
                to={`/knowledge-base/article/detail?_id=${article._id}`}
                key={article._id}
              >
                <div className="kbase-lists card">
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <div className="avatars">
                    <img
                      className="round-img"
                      alt={article.createdUser.details.fullName}
                      src={article.createdUser.details.avatar}
                      width="34"
                      height="34"
                    />
                    <div>
                      <div>
                        Written by: {article.createdUser.details.fullName}
                      </div>
                      <div>
                        Modified:
                        <span>
                          {dayjs(article.modifiedDate).format('MMM D YYYY')}
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
