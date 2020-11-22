import React from "react";
import * as compose from "lodash.flowright";
import Header from "./Header";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { queries } from "../../knowledgeBase/graphql";

const { REACT_APP_TOPIC_ID } = process.env;

function Layout(props) {
  const { location, getKbTopicQuery } = props;

  const queryParams = queryString.parse(location.search);
  const kbTopic = getKbTopicQuery.widgetsKnowledgeBaseTopicDetail || {};

  return (
    <div className="layout">
      <Header
        history={props.history}
        searchValue={queryParams.searchValue}
        kbTopic={kbTopic}
      />

      <Container className="main-body">{props.children}</Container>
    </div>
  );
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
