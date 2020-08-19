import React from 'react';
import PropTypes from 'prop-types';
import * as compose from 'lodash.flowright';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Lists from '../components/Lists';
import { queries } from '../graphql/index';

class ListContainer extends React.Component {
  render() {
    const { getKbTopicQuery, getKbCategoryQuery } = this.props;

    if (getKbTopicQuery.loading || getKbCategoryQuery.loading) {
      return <div>loading</div>;
    }

    const kbTopic = getKbTopicQuery.widgetsKnowledgeBaseTopicDetail || {};

    const categoryDetail = getKbCategoryQuery.knowledgeBaseCategoryDetail || {};

    const categories = kbTopic.categories ? kbTopic.categories : [];
    const articles = categoryDetail.articles ? categoryDetail.articles : [];
    return (
      <Lists
        articles={articles}
        categories={categories}
        categoriesDetail={categoryDetail}
      />
    );
  }
}

ListContainer.propTypes = {
  getKbCategoryQuery: PropTypes.object,
  getKbTopicQuery: PropTypes.object
};

export default compose(
  graphql(gql(queries.getKbCategoryQuery), {
    name: 'getKbCategoryQuery',
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
)(ListContainer);
