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
      <o key={index}>
        {author.details.fullName}
        {authors.length > 1 && ', '}
      </o>
    ));
  };

  renderAvatars = cat => {
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
          <Container className="knowledge-base promoted mt-30" fluid="sm">
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
                          Read more
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

<section className="video align-center">
    <h5>Video tutorials</h5>
    <p>
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
      allowfullscreen="allowfullscreen"
    ></iframe>
  </section>
      </>
    );
  };

  render() {
    return (
      <>
      {this.renderCategories()}
      </>
    );
  }
}

Categories.propTypes = {
  kbTopic: PropTypes.object,
  articlesQuery: PropTypes.object
};

export default Categories;
