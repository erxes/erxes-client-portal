import React from "react";
import PropTypes from "prop-types";
import * as compose from "lodash.flowright";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Details from "../components/ArticleDetail";
import Layout from "../../layouts/components/Layout";
import { queries } from "../graphql/index";
import { getEnv } from "../../../apolloClient";

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
      return <div>loading</div>;
    }

    const category = getKbCategoryQuery.knowledgeBaseCategoryDetail || {};

    if (!getArticleDetailQuery && category && category.articles[0]) {
      window.location = `${location.pathname}?catId=${category._id}&_id=${category.articles[0]._id}`;
    }

    const articleDetail = getArticleDetailQuery
      ? getArticleDetailQuery.knowledgeBaseArticleDetail || {}
      : {};
    const kbTopic = getKbTopicQuery.widgetsKnowledgeBaseTopicDetail || {};

    return (
      <Layout
        forms={[
          {
            brand_id: "mwNwqL",
            form_id: "SRsHPN",
          },
          {
            brand_id: "ASJrzQ",
            form_id: "vQyp4C",
          }
        ]}
      >
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
