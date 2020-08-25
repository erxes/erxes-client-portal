import React from 'react';
import PropTypes from 'prop-types';
import * as compose from 'lodash.flowright';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Details from '../components/ArticleDetail';
import { queries } from '../graphql/index';

class DetailContainer extends React.Component {
  render() {
    const { getArticleDetailQuery, getKbTopicQuery } = this.props;

    if (getKbTopicQuery.loading || getArticleDetailQuery.loading) {
      return <div>loading</div>;
    }

    const kbTopic = getKbTopicQuery.widgetsKnowledgeBaseTopicDetail || {};
    const categories = kbTopic.categories ? kbTopic.categories : [];
    const articleDetail =
      getArticleDetailQuery.knowledgeBaseArticleDetail || {};

    return <Details articleDetail={articleDetail} categories={categories} />;
  }
}

DetailContainer.propTypes = {
  getArticleDetailQuery: PropTypes.object,
  queryParams: PropTypes.object
};

export default compose(
  graphql(gql(queries.getArticleDetailQuery), {
    name: 'getArticleDetailQuery',
    options: ({ queryParams }) => ({
      variables: { _id: queryParams._id }
    })
  }),
  graphql(gql(queries.getKbTopicQuery), {
    name: 'getKbTopicQuery',
    options: () => ({
      variables: { _id: '7ivEFncj85EhWKpxR' }
    })
  })
)(DetailContainer);
