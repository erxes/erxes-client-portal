import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { apiClient } from '../../apolloClient';
import Item from '../components/Item';

type Props = {
  stageId: string;
  backgroundColor?: string;
};

const clientPortalGetTasks = `
  query clientPortalGetTasks($stageId: String!) {
    clientPortalGetTasks(stageId: $stageId) {
      _id
      name
      description
      modifiedAt
    }
  }
`;

function ItemContainer({ stageId, ...props }: Props) {
  const { loading, data = {} } = useQuery(gql(clientPortalGetTasks), {
    variables: { stageId },
    client: apiClient,
    skip: !stageId
  });

  const tasks = data.clientPortalGetTasks || [];

  const updatedProps = {
    ...props,
    tasks,
    loading
  };

  return <Item {...updatedProps} />;
}

export default ItemContainer;
