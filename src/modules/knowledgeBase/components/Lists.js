import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionHeader from "../../common/components/SectionHeader";
import CreateButton from "../../common/components/CreateButton";
class Lists extends React.Component {
  handleClick = () => {
    console.log("faq");
  };
  render() {
    return (
      <Container className="knowledge-base">
        <SectionHeader icon="book" title="Knowledge Base" />
        <CreateButton value="Create FAQ" onClick={this.handleClick} />
        <Row>
          <Col md={4} sm={6}>
            <Card className="category-item">
              <Link to="/">
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
              <Link to="/">
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
              <Link to="/">
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
              <Link to="/">
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

export default Lists;
