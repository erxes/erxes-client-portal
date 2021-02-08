import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { AppConsumer } from '../../appContext';
import { Topic } from '../../types';
import CategoryDetail from '../components/CategoryDetail';
import { categoryDetailQuery } from '../graphql/queries';

type Props = {
  queryParams: any;
  topic: Topic;
};

function CategoryDetailContainer({ queryParams, ...props }: Props) {
  const { id } = queryParams;

  const { loading, data = {} } = id
    ? useQuery(gql(categoryDetailQuery), {
        variables: { _id: id }
      })
    : { loading: true };

  const category = data.knowledgeBaseCategoryDetail || {};

  const updatedProps = {
    ...props,
    loading,
    category
  };

  return <CategoryDetail {...updatedProps} />;
}

const WithConsumer = props => {
  return (
    <AppConsumer>
      {({ topic }: { topic: Topic }) => {
        return <CategoryDetailContainer {...props} topic={topic} />;
      }}
    </AppConsumer>
  );
};

export default WithConsumer;
