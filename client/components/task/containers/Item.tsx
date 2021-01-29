import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { getTasks } from '../../../pages/api/resolvers/config';
import Item from '../components/Item';

type Props = {
  stageId: string;
};

function ItemContainer({ stageId, ...props }: Props) {
  const { loading, data = {} } = useQuery(gql(getTasks), {
    variables: { stageId },
    skip: !stageId
  });

  const tasks = data.getTasks || [];
  console.log(tasks);

  const updatedProps = {
    ...props,
    tasks,
    loading
  };

  return <Item {...updatedProps} />;
}

export default ItemContainer;
