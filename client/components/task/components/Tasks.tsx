import React from 'react';
import Layout from '../../main/containers/Layout';
import Item from '../containers/Item';
import { Wrapper, StageTitle } from '../../styles/tasks';

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
        <div key={stage._id}>
          <StageTitle>{stage.name}</StageTitle>

          <Wrapper>
            <Item stageId={stage._id} />
          </Wrapper>
        </div>
      ))}
    </Layout>
  );
}

export default TasksContainer;
