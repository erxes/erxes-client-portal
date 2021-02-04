import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { getTaskStages } from '../../../pages/api/resolvers/queries/config';
import Tasks from '../components/Tasks';

type Props = {};

function TasksContainer(props: Props) {
  const { loading, data = {} } = useQuery(gql(getTaskStages), {
    variables: { stageId: process.env.CLIENT_PORTAL_CONFIG_ID }
  });

  const stages = data.getTaskStages || [];

  const updatedProps = {
    ...props,
    stages,
    loading
  };

  return <Tasks {...updatedProps} />;
}

export default TasksContainer;
