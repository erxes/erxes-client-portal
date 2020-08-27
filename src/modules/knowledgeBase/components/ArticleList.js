import React from 'react';
import * as dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Lists extends React.Component {
  render() {
    return (
      <Container className='knowledge-base'>
        {/* <Search
          history={this.props.history}
          searchValue={this.props.searchValue}
        /> */}
        <Row>
          <Col>
            {this.props.articles.map((article) => (
              <Link
                to={`/knowledge-base-detail?_id=${article._id}`}
                key={article._id}
              >
                <div className='kbase-lists card'>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <div className='avatars'>
                    <img
                      className='round-img'
                      alt={article.createdUser.details.fullName}
                      src={article.createdUser.details.avatar}
                      width='34'
                      height='34'
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
  articles: PropTypes.array
};

export default Lists;
