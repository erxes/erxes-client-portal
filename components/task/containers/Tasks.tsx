import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { getTaskStages } from '../../../pages/api/resolvers/queries/config';
import { AppConsumer } from '../../appContext';
import { Config } from '../../types';
import Tasks from '../components/Tasks';

type Props = {
  config: Config;
};

function TasksContainer({ config, ...props }: Props) {
  const { loading, data = {} } = useQuery(gql(getTaskStages), {
    variables: { taskPublicPipelineId: config.taskPublicPipelineId },
    skip: !config.taskPublicPipelineId
  });

  const stages = data.getTaskStages || [];

  const updatedProps = {
    ...props,
    stages,
    loading
  };

  return <Tasks {...updatedProps} />;
}

const WithConsumer = (props) => {
  return (
    <AppConsumer>
      {({ config }: { config: Config }) => {
        return <TasksContainer {...props} config={config} />;
      }}
    </AppConsumer>
  );
};

export default WithConsumer;