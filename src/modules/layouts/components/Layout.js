import React from "react";
import * as compose from "lodash.flowright";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { queries } from "../../knowledgeBase/graphql";
import { getEnv } from "../../../apolloClient";

const { REACT_APP_TOPIC_ID } = getEnv();

class Layout extends React.Component {
  render() {
    const { location, getKbTopicQuery, history, children } = this.props;

    const queryParams = queryString.parse(location.search);
    const kbTopic = getKbTopicQuery.widgetsKnowledgeBaseTopicDetail || {};

    let headingSpacing = false;
    let marginTop = "main-body";

    if (location.pathname === "/knowledge-base" && location.search === "") {
      headingSpacing = true;
      marginTop = "mt-100p";
    }

    return (
      <div className="layout knowlegde-base">
        <Header
          history={history}
          searchValue={queryParams.searchValue}
          kbTopic={kbTopic}
          headingSpacing={headingSpacing}
        />
        <Container className={marginTop} fluid="lg">
          {children}
        </Container>
        <Footer kbTopic={kbTopic} />
      </div>
    );
  }
}

export default withRouter(
  compose(
    graphql(gql(queries.getKbTopicQuery), {
      name: "getKbTopicQuery",
      options: () => ({
        variables: { _id: REACT_APP_TOPIC_ID },
      }),
    })
  )(Layout)
);
