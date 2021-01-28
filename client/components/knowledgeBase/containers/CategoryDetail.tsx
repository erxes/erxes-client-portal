import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { AppConsumer } from '../../appContext';
import { Topic } from '../../types';
import CategoryDetail from '../components/CategoryDetail';
import { categoryDetailQuery } from '../graphql/queries';

type Props = {
  categoryId: string;
  topic: Topic;
};

function CategoryDetailContainer({ categoryId, ...props }: Props) {
  const { loading, data = {} } = useQuery(gql(categoryDetailQuery), {
    variables: { _id: categoryId }
  });

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
        return <CategoryDetailContainer {...props} topic={topic} />
      }}
    </AppConsumer>
  );
}

export default WithConsumer;