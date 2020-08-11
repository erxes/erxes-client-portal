import React from 'react';
import PropTypes from 'prop-types';
import * as compose from 'lodash.flowright';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Categories from '../components/Categories';
import { queries } from '../graphql/index';

class CategoriesContainer extends React.Component {
  render() {
    const { getKbTopicQuery } = this.props;

    console.log('dklsxaxaxjdk');

    if (getKbTopicQuery.loading) {
      return <div>loading</div>;
    }

    console.log('dklsjdk');

    const kbTopic = getKbTopicQuery.widgetsKnowledgeBaseTopicDetail || [];

    console.log(kbTopic);

    return <Categories kbTopi={kbTopic} />;
  }
}

CategoriesContainer.propTypes = {
  getKbTopicQuery: PropTypes.object,
};

export default compose(
  graphql(gql(queries.getKbTopicQuery), {
    name: 'getKbTopicQuery',
    options: () => ({
      variables: { _id: 'FLjtmtuRKQ3e4ZYbz' },
    }),
  })
)(CategoriesContainer);
