import React from 'react';
import * as dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../../common/components/SectionHeader';
import ActionRow from '../../common/components/ActionRow';
class Lists extends React.Component {
  handleClick = () => {
    console.log('faq');
  };

  render() {
    return (
      <Container className='knowledge-base'>
        <SectionHeader
          icon={this.props.categoriesDetail.icon}
          title={this.props.categoriesDetail.title}
          description={this.props.categoriesDetail.description}
        />
        <Row>
          <Col md={9}>
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

          <Col md={3}>
            <ActionRow value='Create FAQ' onClick={this.handleClick} />
            <div className='tags sidebar-list'>
              {this.props.categories.map((cat) => (
                <div key={cat._id}>
                  <Col md={4} sm={6}>
                    <Link to={`knowledge-base-lists?_id=${cat._id}`}>
                      <i className={`icon-${cat.icon}`}></i>
                      <div className='tab-content'>
                        <h5>{cat.title}</h5>
                        <p>{cat.content}</p>
                      </div>
                    </Link>
                  </Col>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

Lists.propTypes = {
  kbTopic: PropTypes.object
};

export default Lists;
