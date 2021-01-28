import React from 'react';
import Layout from 'modules/main/containers/Layout';

type Props = {
  loading: boolean;
  stages: any;
};

function TasksContainer({ loading, stages }: Props) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      {stages.map(stage => (
        <p>{stage.name}</p>
      ))}
    </Layout>
  );
}

export default TasksContainer;
