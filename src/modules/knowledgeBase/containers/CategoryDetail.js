import React from 'react';
import PropTypes from 'prop-types';
import * as compose from 'lodash.flowright';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Categories from '../components/CategoryList';
import { queries } from '../graphql/index';
import CategoryDetail from '../components/CategoryDetail';

class CategoryDetailsContainer extends React.Component {
  render() {
    const { getKbCategoryQuery, history } = this.props;

    if (getKbCategoryQuery.loading) {
      return <div>loading</div>;
    }

    const category = getKbCategoryQuery.knowledgeBaseCategoryDetail || {};

    return (
      <CategoryDetail category={category} history={history}></CategoryDetail>
    );
  }
}

CategoryDetailsContainer.propTypes = {
  getKbCategoryQuery: PropTypes.object,
  history: PropTypes.object,
  categoryId: PropTypes.string,
};

export default compose(
  graphql(gql(queries.getKbCategoryQuery), {
    name: 'getKbCategoryQuery',
    options: ({ categoryId }) => ({
      variables: { _id: categoryId },
    }),
  })
)(CategoryDetailsContainer);
