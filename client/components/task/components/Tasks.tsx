import React from 'react';

type Props = {
  loading: boolean;
  stages: any;
};

function TasksContainer({ loading, stages }: Props) {
  console.log(stages)
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {stages.map(stage => <p>{stage.name}</p>)}
    </div>
  );
}

export default TasksContainer;