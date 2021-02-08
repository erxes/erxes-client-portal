import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { getTasks } from '../../../pages/api/resolvers/queries/config';
import Ticket from '../components/Ticket';

type Props = {
  stageId?: string;
};

function TicketContainer({ stageId, ...props }: Props) {
  const { loading, data = {} } = useQuery(gql(getTasks), {
    variables: { stageId: stageId || '3vKotSwXRQr84wwJT' }
  });

  const tickets = data.getTasks || [];

  const updatedProps = {
    ...props,
    tickets,
    loading
  };

  return <Ticket {...updatedProps} />;
}

export default TicketContainer;
