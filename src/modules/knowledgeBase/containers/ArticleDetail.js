import React from "react";
import PropTypes from "prop-types";
import * as compose from "lodash.flowright";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Details from "../components/ArticleDetail";
import { queries } from "../graphql/index";
import { getEnv } from "../../../apolloClient";
import { Spinner } from "react-bootstrap";
import Layout from "../../layouts/components/Layout";

const { REACT_APP_TOPIC_ID } = getEnv();

class DetailContainer extends React.Component {
  render() {
    const {
      getKbTopicQuery,
      getArticleDetailQuery,
      getKbCategoryQuery,
      history,
      location,
    } = this.props;

    if (
      getKbCategoryQuery.loading ||
      (getArticleDetailQuery && getArticleDetailQuery.loading) ||
      getKbTopicQuery.loading
    ) {
      return (
        <Spinner animation="border" variant="secondary" className="centered" />
      );
    }

    const category = getKbCategoryQuery.knowledgeBaseCategoryDetail || {};

    if (!getArticleDetailQuery && category && category.articles[0]) {
      window.location = `${location.pathname}?catId=${category._id}&_id=${category.articles[0]._id}`;
    }

    const articleDetail = getArticleDetailQuery
      ? getArticleDetailQuery.knowledgeBaseArticleDetail || {}
      : {};
    const kbTopic = getKbTopicQuery.widgetsKnowledgeBaseTopicDetail || {};

    let forms;
    if (articleDetail._id === "EGXBhdpAuKfskrTem") {
      forms = [{ brand_id: "GYNxPu", form_id: "w6zwsT" }];
    }
    
    if (articleDetail._id === "ygH5XgEbgGEj7tHaR") {
      forms = [{ brand_id: "ASJrzQ", form_id: "TvEwRy" }];
    }

    if (articleDetail._id === "bHWwCSu5oG5Xcvt9o") {
      forms = [{ brand_id: "ASJrzQ", form_id: "oDKqhS" }];
    }

    return (
      <Layout forms={forms}>
        <Details
          articleDetail={articleDetail}
          category={category}
          kbTopic={kbTopic}
          history={history}
        />
      </Layout>
    );
  }
}

DetailContainer.propTypes = {
  getKbTopicQuery: PropTypes.object,
  history: PropTypes.object,
  getArticleDetailQuery: PropTypes.object,
  getKbCategoryQuery: PropTypes.object,
  queryParams: PropTypes.object,
  topicId: PropTypes.string,
};

export default compose(
  graphql(gql(queries.getArticleDetailQuery), {
    name: "getArticleDetailQuery",
    skip: ({ queryParams }) => !queryParams._id,
    options: ({ queryParams }) => ({
      variables: { _id: queryParams._id },
    }),
  }),
  graphql(gql(queries.getKbTopicQuery), {
    name: "getKbTopicQuery",
    options: () => ({
      variables: { _id: REACT_APP_TOPIC_ID },
    }),
  }),
  graphql(gql(queries.getKbCategoryQuery), {
    name: "getKbCategoryQuery",
    skip: ({ queryParams }) => !queryParams.catId,
    options: ({ queryParams }) => ({
      variables: { _id: queryParams.catId },
    }),
  })
)(DetailContainer);
