import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../../common/components/SectionHeader';
import ArticleList from './ArticleList';

class CategoryDetail extends React.Component {
  renderCategories = () => {
    const { kbTopic, category } = this.props;
    const categories = kbTopic.parentCategories;
    const mainUrl = '/knowledge-base/category/details/';

    if (categories) {
      return categories.map(cat => {
        return (
          <>
            <li className={cat._id === category._id ? 'active' : null}>
              <div className="tab-content">
                <h6>{cat.title}</h6>
                <p>{cat.description}</p>
              </div>
            </li>
            {cat.childrens &&
              cat.childrens.map(child => (
                <Link key={child._id} to={`${mainUrl}${child._id}`}>
                  <li className={child._id === category._id ? 'active' : null}>
                    <Row>
                      <Col md={{ span: 11, offset: 1 }} key={child._id} offs>
                        <div className="tab-content">
                          <h6>{child.title}</h6>
                          <p>{child.description}</p>
                        </div>
                      </Col>
                    </Row>
                  </li>
                </Link>
              ))}
          </>
        );
      });
    }
    return;
  };

  render() {
    const { category, history } = this.props;

    return (
      <Container className="knowledge-base" fluid="sm">
        <SectionHeader title={category.title} />

        <Row className="category-detail">
          <Col md={9}>
            <ArticleList
              articles={category.articles}
              history={history}
              catId={category._id}
            />
          </Col>
          <Col md={3}>
            <div className="tags sidebar-list">
              <h6>Categories</h6>

              <div className="tags sidebar-list">
                <ul>{this.renderCategories()}</ul>
              </div>
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
