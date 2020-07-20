import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import SectionHeader from "../../common/components/SectionHeader";
class Lists extends React.Component {
  render() {
    return (
      <Container className="knowledge-base">
        <SectionHeader icon="book" title="Knowledge Base" />
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <i className="icon-flag"></i>
                    <div className="tab-content">
                      <h5>Features</h5>
                      <p>
                        Explore the power of erxes features through different
                        use cases
                      </p>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <i className="icon-book"></i>
                    <div className="tab-content">
                      <h5>User Guide</h5>
                      <p>
                        Read how-to guides and articles on how to use each erxes
                        feature
                      </p>
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <i className="icon-diamond"></i>
                    <div className="tab-content">
                      <h5>Milestones</h5>
                      <p>
                        Learn about the terms and conditions of the rewards
                        program.
                      </p>
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="content-header">
                    <i className="icon-flag"></i>
                    <div className="tab-content">
                      <h5>Features</h5>
                      <p>
                        Explore the power of erxes features through different
                        use cases
                      </p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="content-header">
                    <i className="icon-book"></i>
                    <div className="tab-content">
                      <h5>User Guide</h5>
                      <p>
                        Read how-to guides and articles on how to use each erxes
                        feature
                      </p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="content-header">
                    <i className="icon-diamond"></i>
                    <div className="tab-content">
                      <h5>Milestones</h5>
                      <p>
                        Learn about the terms and conditions of the rewards
                        program.
                      </p>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

export default Lists;
