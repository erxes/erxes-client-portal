import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../../common/components/SectionHeader';

class Categories extends React.Component {
  handleClick = () => {
    console.log('faq');
  };

  renderCategories = () => {
    const { kbTopic } = this.props;
    const { categories } = kbTopic;

    if (categories) {
      return categories.map((cat) => {
        return (
          <Col md={4} sm={6} key={cat._id}>
            <Card className="category-item">
              <Link to={`/knowledge-base/category/details/${cat._id}`}>
                <i className={`icon-${cat.icon}`}></i>
                <div className="tab-content">
                  <h5>{cat.title}</h5>
                  <p>{cat.description}</p>
                </div>
              </Link>
            </Card>
          </Col>
        );
      });
    }
    return;
  };

  render() {
    return (
      <Container className="knowledge-base">
        <SectionHeader icon="book" title="Knowledge Base" />
        <Row>{this.renderCategories()}</Row>
      </Container>
    );
  }
}

Categories.propTypes = {
  kbTopic: PropTypes.object,
  articlesQuery: PropTypes.object,
};

export default Categories;
