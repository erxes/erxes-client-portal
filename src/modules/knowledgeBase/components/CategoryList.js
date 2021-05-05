import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../assets/images/avatar-colored.svg';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Categories extends React.Component {
  renderAuthors = authors => {
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
        {authors.length > 1 && ', '}
      </ol>
    ));
  };

  renderAvatars = cat => {
    return (
      <div className="avatars">
        {cat.authors.map((author, index) => (
          <img key={index} className="round-img" alt={author.details.fullName}
            src={(author.details.avatar || []).length === 0 ? Avatar : author.details.avatar}
            width="34" height="34" />
        ))}
        <div className="avatar-info">
          <div>
            <div className="darker">{cat.numOfArticles}</div> articles in this category </div><div>
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
    const { title } = kbTopic;

    return (
      <>
        <Container className="knowledge-base promoted" fluid="sm">
          <div className="category-knowledge-list">
            <h2 className="list-category-title">{'Онцлох цэсүүд'}</h2>
            <div className="promoted-wrap">
              {
                categories.map(cat => (
                  <Card key={cat._id}>
                    <div className="item">
                      <Link to={(cat.articles.length !== 0) ? `/knowledge-base/article/detail?catId=${cat._id}&_id=${cat.articles[0]._id}` : '/'} className="d-flex flex-column align-items-center w-100">
                        <div className="icon-wrapper">
                          <i className={`icon-${cat.icon}`}></i>
                        </div>
                        <div className="tab-content">
                          <h5>{cat.title}</h5>
                          <div className="description">
                            <p>{cat.description}</p>
                          </div>
                        </div>
                        <div className="more">{'Дэлгэрэнгүй'}</div>
                      </Link>
                    </div>
                  </Card>
                ))
              }

            </div>
          </div>
        </Container>
        <Container className="knowledge-base" fluid="sm">
          <div className="category-knowledge-list">
            <h2 className="list-category-title">{title}</h2>
            <Row>
              {
                categories.map(cat => (
                  <Col md={4} key={cat._id}>
                    <Card className="category-item">
                      <Link to={(cat.articles.length !== 0) ? `/knowledge-base/article/detail?catId=${cat._id}&_id=${cat.articles[0]._id}` : '/'} className="d-flex flex-column align-items-center w-100">
                        <div className="icon-wrapper">
                          <i className={`icon-${cat.icon}`}></i>
                        </div>
                        <div className="tab-content">
                          <h5>{cat.title}</h5>
                          <p>{cat.description}</p>
                        </div>
                      </Link>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </div>
        </Container>
      </>
    )
  };

  render() {
    return (
      <>
        { this.renderCategories()}
      </>
    );
  }
}

Categories.propTypes = {
  kbTopic: PropTypes.object,
  articlesQuery: PropTypes.object
};

export default Categories;
