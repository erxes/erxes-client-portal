import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Ticket from '../components/Ticket';

export default function TicketContainer() {
  const { data, error } = useQuery(gql(`
    query currentUser {
      currentUser {
        _id
      }
    }
  `));

  console.log(data, error)

  return <Ticket />;
}
