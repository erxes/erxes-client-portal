import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../../common/components/SectionHeader';
import ArticleList from './ArticleList';
import Search from '../../common/components/Search';
class CategoryDetail extends React.Component {
  handleClick = () => {
    console.log('faq');
  };

  isActive = (categoryId) => {
    if (categoryId === this.props.category._id) {
      return 'active';
    }

    return;
  };

  renderCategories = () => {
    const { kbTopic } = this.props;
    const { categories } = kbTopic;

    if (categories) {
      return categories.map((cat) => {
        return (
          <Link
            key={cat._id}
            to={`/knowledge-base/category/details/${cat._id}`}
          >
            <div className='tags sidebar-list'>
              <ul>
                <li className={this.isActive(cat._id)}>
                  <h6>
                    <i className={`icon-${cat.icon}`}></i>
                    {cat.title}
                  </h6>
                  <div className='cat-description'>
                    <p>{cat.description}</p>
                    <p>
                      There are
                      <span>
                        {' '}
                        {cat.numOfArticles} articles in this category
                      </span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Link>
        );
      });
    }
    return;
  };

  render() {
    return (
      <Container className='knowledge-base'>
        <SectionHeader
          icon={this.props.category.icon}
          title={this.props.category.title}
          description={this.props.category.description}
        />

        <Row>
          <Col md={9}>
            <ArticleList
              articles={this.props.category.articles}
              history={this.props.history}
            ></ArticleList>
          </Col>
          <Col md={3}>
            <div className='tags sidebar-list'>
              <Search
                history={this.props.history}
                searchValue={this.props.searchValue}
              />

              <h6>Categories</h6>
              {this.renderCategories()}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

CategoryDetail.propTypes = {
  kbTopic: PropTypes.object
};

export default CategoryDetail;
