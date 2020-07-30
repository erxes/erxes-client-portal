import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "../../common/components/SectionHeader";
import ActionRow from "../../common/components/ActionRow";
import Vote from "../../common/components/Vote";
import Related from "../../common/components/Related";
import Share from "../../common/components/Share";
class Detail extends React.Component {
  handleClick = () => {
    console.log("faq");
  };
  render() {
    return (
      <Container className="knowledge-base">
        <SectionHeader icon="flag" title="Creating your first workspace" />

        <Row>
          <Col md={2}>
            <div className="post-details">
              <div>
                authored by <p>Uuganbayar Bat-Ulzii</p>
              </div>
              <div>
                created at{" "}
                <p>
                  <time>2020.07.22</time>
                </p>
              </div>
              <div>
                last edited
                <p>
                  <time>2020.07.22</time>
                </p>
              </div>
              <div className="vote-bar">
                votes
                <p>
                  <span>
                    <i className="icon-like"></i>16
                  </span>
                  <span>
                    <i className="icon-dislike"></i>2
                  </span>
                </p>
              </div>
              <div>
                share
                <Share />
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className="kbase-detail kbase-lists">
              <Row>
                <Col md="9">
                  <h4>What is erxes ?</h4>
                </Col>
                <Col md="3" className="justify-content-end">
                  <div className="edit-section justify-content-end">
                    <button className="btn">
                      <i className="icon-edit"></i>
                    </button>
                    <button className="btn">
                      <i className="icon-trash"></i>
                    </button>
                  </div>
                </Col>
              </Row>

              <hr />
              <div class="content">
                <p>
                  The individual categories of the knowledgebase are designed
                  for companies to manage knowledgebases for different
                  brands/websites. You can only add one knowledgebase category
                  to the Messenger at this time.&nbsp;Read on for the detailed
                  guide.
                </p>
                <p>
                  To add a knowledgebase section to the existing erxes Messenger
                  please follow these steps:
                  <br />
                  <br />
                  1. Go to Settings - &gt; Integrations Settings - &gt; Script
                  Manager
                  <br />
                  2. Add 'New Script'
                  <br />
                  3. Select your Knowledgebase Category
                </p>
                <p>
                  Additionally, you can add any popups you've already created by
                  choosing it from 'Leads.'
                </p>
                <p>
                  <img
                    alt=""
                    src="https://s3.ap-southeast-1.amazonaws.com/office.erxes.io/undefined0.8280397390460985Screenshot2020-06-3012.36.30.png"
                  />
                </p>
                <p>
                  <span>
                    Also, please note that the Knowledgebase feature is in beta
                    stage. Our SaaS Product Development roadmap can be found
                    here:&nbsp;
                  </span>
                  <a href="https://erxes.io/roadmap" target="__blank">
                    https://erxes.io/roadmap
                  </a>
                </p>
              </div>
            </div>
            <Vote />
          </Col>
          <Col md={3}>
            <ActionRow value="Create FAQ" onClick={this.handleClick} />
            <div className="tags sidebar-list">
              <h6>Related Articles</h6>
              <ul>
                <li className="active">
                  <h6>Creating your First Workspace</h6>
                  <p></p>
                </li>
                <li>
                  <h6>Initial Setup</h6>
                  <p></p>
                </li>
                <li>
                  <h6>Creating Knowledge base</h6>
                  <p></p>
                </li>
              </ul>
            </div>
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

export default Detail;
