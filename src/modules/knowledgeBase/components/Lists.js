import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionHeader from "../../common/components/SectionHeader";
import ActionRow from "../../common/components/ActionRow";
class Lists extends React.Component {
  handleClick = () => {
    console.log("faq");
  };
  render() {
    return (
      <Container style={{ maxWidth: "800px" }} className="knowledge-base">
        <SectionHeader icon="flag" title="Feature" />
        <ActionRow value="Create FAQ" onClick={this.handleClick} />
        <div className="kbase-lists">
          <h4>What is erxes ?</h4>
          <ul>
            <li>
              <Link to="/knowledge-base-detail">
                Creating your First Workspace
              </Link>
            </li>
            <li>
              <Link to="/knowledge-base-detail">
                Creating your First Workspace
              </Link>
            </li>
            <li>
              <Link to="/knowledge-base-detail">
                Creating your First Workspace
              </Link>
            </li>
            <li>
              <Link to="/knowledge-base-detail">
                Creating your First Workspace
              </Link>
            </li>
          </ul>
          <h4>What is erxes ?</h4>
          <ul>
            <li>
              <Link to="/knowledge-base-detail">
                Creating your First Workspace
              </Link>
            </li>
            <li>
              <Link to="/knowledge-base-detail">
                Creating your First Workspace
              </Link>
            </li>
            <li>
              <Link to="/knowledge-base-detail">
                Creating your First Workspace
              </Link>
            </li>
            <li>
              <Link to="/knowledge-base-detail">
                Creating your First Workspace
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    );
  }
}

export default Lists;
