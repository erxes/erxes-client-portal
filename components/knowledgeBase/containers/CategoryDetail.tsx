import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { apiClient } from '../../apolloClient';
import { Topic } from '../../types';
import CategoryDetail from '../components/CategoryDetail';
import { categoryDetailQuery } from '../graphql/queries';

type Props = {
  queryParams: any;
  topic: Topic;
};

function CategoryDetailContainer({ queryParams, ...props }: Props) {
  const { id } = queryParams;

  const { loading, data = {} } = useQuery(gql(categoryDetailQuery), {
    variables: { _id: id },
    client: apiClient,
    skip: !id
  })

  const category = data.knowledgeBaseCategoryDetail || {};

  const updatedProps = {
    ...props,
    loading,
    category
  };

  return <CategoryDetail {...updatedProps} />;
}

export default CategoryDetailContainer;
