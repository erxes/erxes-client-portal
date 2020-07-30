import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionHeader from "../../common/components/SectionHeader";
import ActionRow from "../../common/components/ActionRow";
import Search from "../../common/components/Search";
class Categories extends React.Component {
  handleClick = () => {
    console.log("faq");
  };
  render() {
    return (
      <Container className="knowledge-base">
        <SectionHeader icon="book" title="Knowledge Base" />
        {/* <ActionRow value='Create FAQ' onClick={this.handleClick} /> */}
        <Search />
        <Row>
          <Col md={4} sm={6}>
            <Card className="category-item">
              <Link to="/knowledge-base-lists">
                <i className="icon-flag"></i>
                <div className="tab-content">
                  <h5>Features</h5>
                  <p>
                    Explore the power of erxes features through different use
                    cases
                  </p>
                </div>
              </Link>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card className="category-item">
              <Link to="/knowledge-base-lists">
                <i className="icon-diamond"></i>
                <div className="tab-content">
                  <h5>Milestones</h5>
                  <p>
                    Learn about the terms and conditions of the rewards program.
                  </p>
                </div>
              </Link>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card className="category-item">
              <Link to="/knowledge-base-lists">
                <i className="icon-book"></i>
                <div className="tab-content">
                  <h5>User Guide</h5>
                  <p>
                    Read how-to guides and articles on how to use each erxes
                    feature
                  </p>
                </div>
              </Link>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card className="category-item">
              <Link to="/knowledge-base-lists">
                <i className="icon-diamond"></i>
                <div className="tab-content">
                  <h5>Milestones</h5>
                  <p>
                    Learn about the terms and conditions of the rewards program.
                  </p>
                </div>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Categories;
