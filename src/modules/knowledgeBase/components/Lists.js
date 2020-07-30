import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionHeader from "../../common/components/SectionHeader";
import ActionRow from "../../common/components/ActionRow";
class Lists extends React.Component {
  handleClick = () => {
    console.log("faq");
  };
  render() {
    return (
      <Container className="knowledge-base">
        <SectionHeader
          icon="flag"
          title="Feature"
          description="Explore the power of erxes features through different use cases"
        />

        <Row>
          <Col md={9}>
            <div className="kbase-lists">
              <h4>What is erxes ?</h4>
              <hr />
              <ul>
                <li>
                  <Link to="/knowledge-base-detail">
                    <h6>How do I connect my Gmail account to Team Inbox?</h6>
                    <p>
                      You will be able to connect them in your Integrations
                      Settings.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/knowledge-base-detail">
                    <h6>How do I send emails from erxes?</h6>
                    <p>
                      You can send emails from our Engage feature. Make sure you
                      follow these steps to properly start your engagement
                      through emails.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/knowledge-base-detail">
                    <h6>How do I show FAQ (Knowledgebase) in the Messenger?</h6>
                    <p>
                      The individual categories of the knowledgebase are
                      designed for companies to manage knowledgebases for
                      different brands/websites. You can only add one
                      knowledgebase category to the Messenger at this time. Read
                      on for the detailed guide.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/knowledge-base-detail">
                    Creating your First Workspace
                  </Link>
                </li>
              </ul>
              <h4>Creating your first messenger</h4>
              <hr />
              <ul>
                <li>
                  <Link to="/knowledge-base-detail">
                    <h6>How do I connect my Gmail account to Team Inbox?</h6>
                    <p>
                      You will be able to connect them in your Integrations
                      Settings.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/knowledge-base-detail">
                    <h6>How do I send emails from erxes?</h6>
                    <p>
                      You can send emails from our Engage feature. Make sure you
                      follow these steps to properly start your engagement
                      through emails.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/knowledge-base-detail">
                    <h6>How do I show FAQ (Knowledgebase) in the Messenger?</h6>
                    <p>
                      The individual categories of the knowledgebase are
                      designed for companies to manage knowledgebases for
                      different brands/websites. You can only add one
                      knowledgebase category to the Messenger at this time. Read
                      on for the detailed guide.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/knowledge-base-detail">
                    Creating your First Workspace
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <ActionRow value="Create FAQ" onClick={this.handleClick} />
            <div className="tags sidebar-list">
              <h6>Topics</h6>
              <ul>
                <li className="active">
                  <h6>
                    <i className="icon-flag"></i>Features
                  </h6>
                  <p>
                    Explore the power of erxes features through different use
                    cases
                  </p>
                </li>
                <li>
                  <h6>
                    <i className="icon-diamond"></i>Milestones
                  </h6>
                  <p>
                    Learn about the terms and conditions of the rewards program.
                  </p>
                </li>
                <li>
                  <h6>
                    <i className="icon-book"></i>User guides
                  </h6>
                  <p>
                    Read how-to guides and articles on how to use each erxes
                    feature
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Lists;
