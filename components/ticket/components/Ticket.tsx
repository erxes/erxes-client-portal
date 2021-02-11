import React from 'react';
import Layout from '../../main/containers/Layout';
import { StageTitle } from '../../styles/tasks';
import {
  CategoryItem,
  CategoryContent
} from '../../knowledgeBase/components/styles';
import Button from '../../common/Button';
import Icon from '../../common/Icon';
import Link from 'next/link';

type Props = {
  loading: boolean;
  tickets: any;
};

export default function Ticket({ loading, tickets }: Props) {
  return (
    <Layout>
      <Link href="/tickets/form">
        <Button btnStyle="success">
          <Icon icon="plus" /> &nbsp; Submit new ticket
        </Button>
      </Link>
      <br />
      <br />

      <StageTitle className="base-color">Tickets</StageTitle>

      {tickets.map(ticket => (
        <CategoryItem>
          <CategoryContent>
            <h5 className="base-color">{ticket.name}</h5>
            <p>{ticket.description}</p>
          </CategoryContent>
        </CategoryItem>
      ))}
    </Layout>
  );
}
