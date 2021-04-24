import { gql, useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { ApiApolloClientContext } from '../../ApiContext';
import { Config } from '../../types';
import Tasks from '../components/Tasks';

type Props = {
  config: Config;
};

const clientPortalGetTaskStages = `
  query clientPortalGetTaskStages($taskPublicPipelineId: String!) {
    clientPortalGetTaskStages(taskPublicPipelineId: $taskPublicPipelineId) {
      _id
      name
    }
  }
`;

function TasksContainer({ config, ...props }: Props) {
  const apiClient = useContext(ApiApolloClientContext);

  const { loading, data = {} } = useQuery(gql(clientPortalGetTaskStages), {
    variables: { taskPublicPipelineId: config.taskPublicPipelineId },
    client: apiClient,
    skip: !config.taskPublicPipelineId
  });

  const stages = data.clientPortalGetTaskStages || [];

  const updatedProps = {
    ...props,
    config,
    stages,
    loading
  };

  return <Tasks {...updatedProps} />;
}

export default TasksContainer;