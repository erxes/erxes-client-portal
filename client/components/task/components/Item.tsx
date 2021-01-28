import React from 'react';

type Props = {
  loading: boolean;
  tasks: any;
};

function ItemContainer({ loading, tasks }: Props) {
  if (loading) {
    return <div>Loading...</div>
  }

  return tasks.map(task => {
    return <div>{task.name}</div>
  })
}

export default ItemContainer;