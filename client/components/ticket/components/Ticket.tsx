import React from 'react';
import Layout from '../../main/containers/Layout';
import { StageTitle } from '../../styles/tasks';
import {
  CategoryItem,
  CategoryContent
} from '../../knowledgeBase/components/styles';

type Props = {
  loading: boolean;
  tickets: any;
};

export default function Ticket({ loading, tickets }: Props) {
  return (
    <Layout>
      <StageTitle>Tickets</StageTitle>

      {tickets.map(ticket => (
        <CategoryItem>
          <CategoryContent>
            <h5>{ticket.name} </h5>
            <p>{ticket.description}</p>
          </CategoryContent>
        </CategoryItem>
      ))}
    </Layout>
  );
}
