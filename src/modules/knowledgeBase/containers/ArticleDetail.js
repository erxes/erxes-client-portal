import React from "react";
import PropTypes from "prop-types";
import * as compose from "lodash.flowright";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Details from "../components/ArticleDetail";
import { queries } from "../graphql/index";
import { getEnv } from '../../../apolloClient';

const { REACT_APP_TOPIC_ID } = getEnv();

class DetailContainer extends React.Component {
  render() {
    const { getKbTopicQuery, getArticleDetailQuery, getKbCategoryQuery, history } = this.props;

    if (getKbCategoryQuery.loading || getArticleDetailQuery.loading || getKbTopicQuery.loading) {
      return <div></div>;
    }    
    
    const category = getKbCategoryQuery.knowledgeBaseCategoryDetail || {};
    const articleDetail = getArticleDetailQuery.knowledgeBaseArticleDetail || {};
    const kbTopic = getKbTopicQuery.widgetsKnowledgeBaseTopicDetail || {};    

    return <Details articleDetail={articleDetail} category={category} kbTopic={kbTopic} history={history} />;    
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
    options: ({ queryParams }) => ({
      variables: { _id: queryParams._id },
      skip: !queryParams._id
    }),
  }),
  graphql(gql(queries.getKbTopicQuery), {
    name: 'getKbTopicQuery',
    options: () => ({
      variables: { _id: REACT_APP_TOPIC_ID }
    })
  }),
  graphql(gql(queries.getKbCategoryQuery), {
    name: "getKbCategoryQuery",
    options: ({ queryParams }) => ({
      variables: { _id: queryParams.catId },
      skip: !queryParams.catId
    }),
  })
)(DetailContainer);
