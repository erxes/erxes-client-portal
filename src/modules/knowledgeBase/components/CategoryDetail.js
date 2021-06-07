import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionHeader from "../../common/components/SectionHeader";
import ArticleList from "./ArticleList";

class CategoryDetail extends React.Component {
  renderCategories = () => {
    const { kbTopic, category } = this.props;
    const { parentCategories } = kbTopic;

    const renderCategory = (cat) => {
      return (
        <Link key={cat._id} to={`/knowledge-base/category/details/${cat._id}`}>
          <div className="tags sidebar-list">
            <ul>
              <li className={cat._id === category._id ? "active" : ""}>
                <div className="sidebar-item">
                  <div className="icon-wrapper">
                    <i className={`icon-${cat.icon}`} />
                  </div>
                  <h6>{cat.title}</h6>
                </div>
              </li>
            </ul>
          </div>
        </Link>
      );
    };

    if (parentCategories) {
      return (
        <>
          {parentCategories.map((cat) => (
            <React.Fragment key={cat._id}>
              {renderCategory(cat)}
              {cat.childrens && (
                <div className="sub-categories">
                  {cat.childrens.map((child) => renderCategory(child))}
                </div>
              )}
            </React.Fragment>
          ))}
        </>
      );
    }
    return;
  };

  render() {
    const { category, history } = this.props;

    return (
      <Container className="knowledge-base" fluid="sm">
        <SectionHeader title={category.title} />

        <Row className="category-detail">
          <Col md={3}>
            <div className="sidebar-wrap">
              <div className="tags sidebar-list">{this.renderCategories()}</div>
            </div>
          </Col>
          <Col md={9}>
            <ArticleList
              articles={category.articles}
              history={history}
              catId={category._id}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

CategoryDetail.propTypes = {
  kbTopic: PropTypes.object,
};

export default CategoryDetail;
