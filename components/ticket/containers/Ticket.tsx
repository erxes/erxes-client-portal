import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { AppConsumer } from '../../appContext';
import { ICustomer, Store } from '../../types';
import Ticket from '../components/Ticket';

type Props = {
  currentUser?: ICustomer;
};

const clientPortalTickets = `
  query clientPortalTickets($_id: String!) {
    clientPortalTickets(_id: $_id) {
      _id
      name
      description
      status
      priority
    }
  }
`;

function TicketContainer({ currentUser, ...props }: Props) {
  const { loading, data = {} } = useQuery(gql(clientPortalTickets), {
    variables: { email: (currentUser || {}).email },
    skip: !currentUser
  });

  const tickets = data.clientPortalTickets || [];

  const updatedProps = {
    ...props,
    tickets,
    loading
  };

  return <Ticket {...updatedProps} />;
}

const WithConsumer = props => {
  return (
    <AppConsumer>
      {({ currentUser }: Store) => {
        return <TicketContainer {...props} currentUser={currentUser} />;
      }}
    </AppConsumer>
  );
};

export default WithConsumer;