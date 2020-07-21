import React from "react";
import { Container } from "react-bootstrap";
import SectionHeader from "../../common/components/SectionHeader";
import ActionRow from "../../common/components/ActionRow";
import Vote from "../../common/components/Vote";
import Related from "../../common/components/Related";
class Detail extends React.Component {
  handleClick = () => {
    console.log("faq");
  };
  render() {
    return (
      <Container style={{ maxWidth: "800px" }} className="knowledge-base">
        <SectionHeader icon="flag" title="Creating your first workspace" />
        <ActionRow value="Create FAQ" onClick={this.handleClick} />
        <div className="kbase-detail kbase-lists">
          <h4>What is erxes ?</h4>
          To manage payments, you need to ensure you are a ZenHub administrator
          for your GitHub organization. The requirements to become a ZenHub
          administrator are: You must have a verified GitHub user account You
          must have read or write permissions with your GitHub organization
          Successfully sign up with ZenHub, connecting your GitHub account,
          ensuring that you have both a ZenHub and GitHub licence You do not
          need to be an admin in GitHub, but you do need to ensure you are part
          of your team's organization, and have permissions to at least 1
          repository. At the moment, if you do not have a valid GitHub account,
          and valid seat in your GitHub organization, you cannot access the
          payments dashboard.
        </div>
        <Vote />
        <Related />
      </Container>
    );
  }
}

export default Detail;
