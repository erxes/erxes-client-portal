import React from 'react';
import PropTypes from 'prop-types';
import * as compose from 'lodash.flowright';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Categories from '../components/Categories';
import { queries } from '../graphql/index';

class CategoriesContainer extends React.Component {
  render() {
    const { getKbTopicQuery, widgetsKnowledgeBaseArticles } = this.props;

    if (getKbTopicQuery.loading) {
      return <div>loading</div>;
    }

    const kbTopic = getKbTopicQuery.widgetsKnowledgeBaseTopicDetail || {};

    return (
      <Categories
        kbTopic={kbTopic}
        articlesQuery={widgetsKnowledgeBaseArticles}
      />
    );
  }
}

CategoriesContainer.propTypes = {
  getKbTopicQuery: PropTypes.object,
  queryParams: PropTypes.object
};

export default compose(
  graphql(gql(queries.getKbTopicQuery), {
    name: 'getKbTopicQuery',
    options: () => ({
      variables: { _id: '7ivEFncj85EhWKpxR' }
    })
  }),
  graphql(gql(queries.widgetsKnowledgeBaseArticles), {
    name: 'widgetsKnowledgeBaseArticles',
    options: (props) => {
      console.log(props, 'ppppppp');

      return {
        fetchPolicy: 'network-only',
        variables: {
          topicId: '7ivEFncj85EhWKpxR',
          searchString: props.searchString || ''
        }
      };
    }
  })
)(CategoriesContainer);
