import { gql, useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { ApiApolloClientContext } from '../../ApiContext';
import Detail from '../components/Detail';

type Props = {
  _id?: string;
  onClose: () => void;
};

const clientPortalGetTask = `
  query clientPortalTask($_id: String!) {
    clientPortalTask(_id: $_id) {
      _id
      name
      description
      modifiedAt
    }
  }
`;

function DetailContainer({ _id, ...props }: Props) {
  const apiClient = useContext(ApiApolloClientContext);

  const { data = {} } = useQuery(gql(clientPortalGetTask), {
    variables: { _id },
    client: apiClient,
    skip: !_id
  });

  const item = data.clientPortalTask;

  const updatedProps = {
    ...props,
    item
  };

  return <Detail {...updatedProps} />;
}

export default DetailContainer;
