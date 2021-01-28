import React from 'react';
import Item from '../containers/Item';

type Props = {
  loading: boolean;
  stages: any;
};

function TasksContainer({ loading, stages }: Props) {
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {stages.map(stage => <Item key={stage._id} stageId={stage._id}/>)}
    </div>
  );
}

export default TasksContainer;