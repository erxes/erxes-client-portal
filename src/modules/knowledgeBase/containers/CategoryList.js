import React from 'react';
import PropTypes from 'prop-types';
import * as compose from 'lodash.flowright';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Categories from '../components/CategoryList';
import { queries } from '../graphql/index';
import { Spinner } from 'react-bootstrap';

class CategoriesContainer extends React.Component {
  render() {
    const {
      getKbTopicQuery,
      widgetsKnowledgeBaseArticles,
      history
    } = this.props;

    if (getKbTopicQuery.loading) {
      return <Spinner animation="border" variant="secondary"  className="centered"/>;
    }

    const kbTopic = getKbTopicQuery.widgetsKnowledgeBaseTopicDetail || {};

    return (
      <Categories
        kbTopic={kbTopic}
        history={history}
        articlesQuery={widgetsKnowledgeBaseArticles}
      />
    );
  }
}

CategoriesContainer.propTypes = {
  getKbTopicQuery: PropTypes.object,
  history: PropTypes.object,
  queryParams: PropTypes.object,
  topicId: PropTypes.string
};

export default compose(
  graphql(gql(queries.getKbTopicQuery), {
    name: 'getKbTopicQuery',
    options: ({ topicId }) => ({
      variables: { _id: topicId }
    })
  }),

  graphql(gql(queries.widgetsKnowledgeBaseArticles), {
    name: 'widgetsKnowledgeBaseArticles',
    options: ({ searchString, topicId }) => {
      return {
        fetchPolicy: 'network-only',
        variables: {
          topicId,
          searchString: searchString || ''
        }
      };
    }
  })
)(CategoriesContainer);
