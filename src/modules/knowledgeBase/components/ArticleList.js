import React from 'react';
import * as dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../../common/components/SectionHeader';
import ActionRow from '../../common/components/ActionRow';
import Search from '../../common/components/Search';

class Lists extends React.Component {
  handleClick = () => {
    console.log('faq');
  };

  render() {
    return (
      <Container className='knowledge-base'>
        <Search
          history={this.props.history}
          searchValue={this.props.searchValue}
        />
        <Row>
          <Col>
            {this.props.articles.map((article) => (
              <Link
                to={`knowledge-base-detail?_id=${article._id}`}
                key={article._id}
              >
                <div className='kbase-lists'>
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
                        Modified:{' '}
                        <span>
                          {dayjs(article.modifiedDate).format(
                            'D MMM, YYYY h:mm A'
                          )}
                        </span>{' '}
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
  articles: PropTypes.object
};

export default Lists;
