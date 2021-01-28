import React from 'react';
import { ItemWrapper } from '../../styles/tasks';

type Props = {
  loading: boolean;
  tasks: any;
};

function ItemContainer({ loading, tasks }: Props) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return tasks.map(task => {
    return <ItemWrapper>{task.name}</ItemWrapper>;
  });
}

export default ItemContainer;
