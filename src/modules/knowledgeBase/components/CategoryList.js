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
    const getAttachmentUrl = (value) => {
      if (value && !value.includes('http')) {
        return "https://office.erxes.io/gateway/read-file?key=" + value;
      }
      return value;
    };

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
                : getAttachmentUrl(author.details.avatar)
            }
            width="34"
            height="34"
          />
        ))}
        <div className="avatar-info">
          <div>
            <div className="darker">{cat.numOfArticles}</div> articles in this
            category{' '}
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
    const { parentCategories = [] } = kbTopic;

    const specialCategory = parentCategories[0];
    const categories = parentCategories.slice(1);
    const categoryUrl = `/knowledge-base/category/details/`;

    const detail = cat => {
      return (
        <Link
          to={`${categoryUrl}${cat._id}`}
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

    return (
      <>
        {specialCategory && (
          <Container className="knowledge-base promoted" fluid="sm">
            <div className="category-knowledge-list">
              <h2 className="list-category-title">
                <Link to={`${categoryUrl}${specialCategory._id}`}>
                  {specialCategory.title}
                </Link>
              </h2>
              <div className="promoted-wrap">
                {specialCategory.childrens &&
                  specialCategory.childrens.map((cat , i)=> (
                    <>
                    <Card key={cat._id}>{detail(cat)} 
                       <Link to={`${categoryUrl}${specialCategory._id}`} className="more">
                          Дэлгэрэнгүй
                       </Link>
                    </Card>
                   
                    </>
                  ))}
              </div>
            </div>
          </Container>
        )}

        {categories.map(parentCat => (
          <Container className="knowledge-base" fluid="sm" key={parentCat._id}>
            <div className="category-knowledge-list">
              <h2 className="list-category-title">
                <Link to={`${categoryUrl}${parentCat._id}`}>
                  {parentCat.title}
                </Link>
              </h2>
              <Row>
                {parentCat.childrens &&
                  parentCat.childrens.map(cat => (
                    <Col md={4} key={cat._id} className="category-col">
                      <Card className="category-item">{detail(cat)}</Card>
                    </Col>
                  ))}
              </Row>
            </div>
          </Container>
        ))}
      </>
    );
  };

  render() {
    return <>{this.renderCategories()}</>;
  }
}

Categories.propTypes = {
  kbTopic: PropTypes.object,
  articlesQuery: PropTypes.object
};

export default Categories;
