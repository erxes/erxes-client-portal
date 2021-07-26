import React from 'react';
import PropTypes from 'prop-types';
import * as compose from 'lodash.flowright';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { queries } from '../graphql/index';
import CategoryDetail from '../components/CategoryDetail';

class CategoryDetailsContainer extends React.Component {
  render() {
    const { getKbTopicQuery, getKbCategoryQuery = {}, history } = this.props;

    if (getKbCategoryQuery.loading || getKbTopicQuery.loading) {
      return <div></div>;
    }

    const category = getKbCategoryQuery.knowledgeBaseCategoryDetail || {};

    const kbTopic = getKbTopicQuery.widgetsKnowledgeBaseTopicDetail || {};
    return (
      <CategoryDetail
        kbTopic={kbTopic}
        category={category}
        history={history}
      ></CategoryDetail>
    );
  }
}

CategoryDetailsContainer.propTypes = {
  getKbTopicQuery: PropTypes.object,
  getKbCategoryQuery: PropTypes.object,
  history: PropTypes.object,
  categoryId: PropTypes.string,
  topicId: PropTypes.string
};

export default compose(
  graphql(gql(queries.getKbTopicQuery), {
    name: 'getKbTopicQuery',
    options: ({ topicId }) => ({
      variables: { _id: topicId }
    })
  }),
  graphql(gql(queries.getKbCategoryQuery), {
    name: 'getKbCategoryQuery',
    skip: ({ categoryId }) => !categoryId,
    options: ({ categoryId }) => ({
      variables: { _id: categoryId }
    })
  })
)(CategoryDetailsContainer);
