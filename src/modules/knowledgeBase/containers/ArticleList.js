import React from "react";
import PropTypes from "prop-types";
import * as compose from "lodash.flowright";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Lists from "../components/ArticleList";
import { queries } from "../graphql/index";
import { Spinner } from "react-bootstrap";
import Layout from "../../layouts/components/Layout";

class ListContainer extends React.Component {
  render() {
    const { getKbTopicQuery, getArticlesQuery, history, searchValue } =
      this.props;

    if (getKbTopicQuery.loading || getArticlesQuery.loading) {
      return (
        <Spinner animation="border" variant="secondary" className="centered" />
      );
    }

    const kbTopic = getKbTopicQuery.widgetsKnowledgeBaseTopicDetail || {};
    const articles = getArticlesQuery.widgetsKnowledgeBaseArticles || [];
    const categories = kbTopic.categories ? kbTopic.categories : [];

    return (
      <Layout>
        <Lists
          articles={articles}
          history={history}
          categories={categories}
          searchValue={searchValue}
        />
      </Layout>
    );
  }
}

ListContainer.propTypes = {
  getKbTopicQuery: PropTypes.object,
  getArticlesQuery: PropTypes.object,
  history: PropTypes.object,
};

export default compose(
  graphql(gql(queries.getKbTopicQuery), {
    name: "getKbTopicQuery",
    options: ({ topicId }) => ({
      variables: { _id: topicId },
    }),
  }),
  graphql(gql(queries.widgetsKnowledgeBaseArticles), {
    name: "getArticlesQuery",
    options: ({ searchValue, topicId }) => {
      return {
        fetchPolicy: "network-only",
        variables: {
          topicId,
          searchString: searchValue || "",
        },
      };
    },
  })
)(ListContainer);
