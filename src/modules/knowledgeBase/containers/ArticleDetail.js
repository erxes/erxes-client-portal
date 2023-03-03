import * as compose from "lodash.flowright";

import Details from "../components/ArticleDetail";
import Layout from '../../layouts/components/Layout';
import PropTypes from "prop-types";
import React from "react";
import { getEnv } from "../../../apolloClient";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { queries } from "../graphql/index";

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

    let forms;
    if (articleDetail._id === "9W9K59dx9CGnHobQi") {
      forms = [{ brand_id: "mwNwqL", form_id: "SRsHPN" }];
    }
    if (articleDetail._id === "t6uZTbRkjMZaBhBiP") {
      forms = [{ brand_id: "ASJrzQ", form_id: "vQyp4C" }];
    }
    if (articleDetail._id === "gtmXduDJm7uPMBBS6") {
      forms = [{ brand_id: "ASJrzQ", form_id: "Lsk4vq" }];
    }
  
    return (
      <Layout headingSpacing={false} forms={forms}>
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
