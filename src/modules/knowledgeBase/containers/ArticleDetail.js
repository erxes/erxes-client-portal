import React from "react";
import PropTypes from "prop-types";
import * as compose from "lodash.flowright";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Details from "../components/ArticleDetail";
import { queries } from "../graphql/index";

class DetailContainer extends React.Component {
  render() {
    const { getArticleDetailQuery, getKbCategoryQuery } = this.props;   

    if (getKbCategoryQuery.loading || getArticleDetailQuery.loading) {
      return null;
    }

    const category = getKbCategoryQuery.knowledgeBaseCategoryDetail || {};

    const articleDetail =
      getArticleDetailQuery.knowledgeBaseArticleDetail || {};

    return <Details articleDetail={articleDetail} category={category} />;
  }
}

DetailContainer.propTypes = {
  getArticleDetailQuery: PropTypes.object,
  getKbCategoryQuery: PropTypes.object,
  queryParams: PropTypes.object,
};

export default compose(
  graphql(gql(queries.getArticleDetailQuery), {
    name: "getArticleDetailQuery",
    options: ({ queryParams }) => ({
      variables: { _id: queryParams._id },
      skip: !queryParams._id
    }),
  }),
  graphql(gql(queries.getKbCategoryQuery), {
    name: "getKbCategoryQuery",
    options: ({ queryParams }) => ({
      variables: { _id: queryParams.catId },
      skip: !queryParams.catId
    }),
  })  
)(DetailContainer);
