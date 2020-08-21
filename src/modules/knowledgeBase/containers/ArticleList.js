import React from 'react';
import PropTypes from 'prop-types';
import * as compose from 'lodash.flowright';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Lists from '../components/ArticleList';
import { queries } from '../graphql/index';

class ListContainer extends React.Component {
  render() {
    const {
      getKbTopicQuery,
      getArticlesQuery,
      history,
      searchValue
    } = this.props;

    if (getKbTopicQuery.loading || getArticlesQuery.loading) {
      return <div>loading</div>;
    }

    const kbTopic = getKbTopicQuery.widgetsKnowledgeBaseTopicDetail || {};
    const articles = getArticlesQuery.widgetsKnowledgeBaseArticles || [];

    console.log(articles);

    const categories = kbTopic.categories ? kbTopic.categories : [];
    return (
      <Lists
        articles={articles}
        history={history}
        categories={categories}
        searchValue={searchValue}
      />
    );
  }
}

ListContainer.propTypes = {
  getKbTopicQuery: PropTypes.object,
  getArticlesQuery: PropTypes.object,
  history: PropTypes.object
};

export default compose(
  graphql(gql(queries.getKbTopicQuery), {
    name: 'getKbTopicQuery',
    options: ({ topicId }) => ({
      variables: { _id: topicId }
    })
  }),
  graphql(gql(queries.widgetsKnowledgeBaseArticles), {
    name: 'getArticlesQuery',
    options: ({ searchValue, topicId }) => {
      return {
        fetchPolicy: 'network-only',
        variables: {
          topicId,
          searchString: searchValue || ''
        }
      };
    }
  })
)(ListContainer);
