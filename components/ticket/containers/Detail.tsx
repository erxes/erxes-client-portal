import { gql, useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { ApiApolloClientContext } from '../../ApiContext';
import Detail from '../components/Detail';
import { IUser } from '../../types';

type Props = {
  _id?: string;
  currentUser: IUser;
  onClose: () => void;
};

const clientPortalGetTicket = `
  query clientPortalTicket($_id: String!) {
    clientPortalTicket(_id: $_id) {
      _id
      name
      description
      modifiedAt
    }
  }
`;

function DetailContainer({ _id, ...props }: Props) {
  const apiClient = useContext(ApiApolloClientContext);

  const { data = {} } = useQuery(gql(clientPortalGetTicket), {
    variables: { _id },
    client: apiClient,
    skip: !_id
  });

  const item = data.clientPortalTicket;

  const updatedProps = {
    ...props,
    item
  };

  return <Detail {...updatedProps} />;
}

export default DetailContainer;
