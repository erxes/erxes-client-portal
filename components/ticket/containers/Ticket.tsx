import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { customerTickets } from '../../../pages/api/resolvers/queries/ticket';
import { AppConsumer } from '../../appContext';
import { ICustomer } from '../../types';
import Ticket from '../components/Ticket';

type Props = {
  currentUser?: ICustomer;
};

function TicketContainer({ currentUser, ...props }: Props) {
  const { loading, data = {} } = useQuery(gql(customerTickets), {
    variables: {
      email: currentUser.email
    }
  });

  const tickets = data.customerTickets || [];

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
      {({ currentUser }: { currentUser }) => {
        return <TicketContainer {...props} currentUser={currentUser} />;
      }}
    </AppConsumer>
  );
};

export default WithConsumer;