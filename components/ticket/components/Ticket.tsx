import React, { useState } from 'react';
import { StageTitle } from '../../styles/tasks';
import {
  CategoryItem,
  CategoryContent
} from '../../knowledgeBase/components/styles';
import Button from '../../common/Button';
import Icon from '../../common/Icon';
import Link from 'next/link';
import Detail from './Detail';
import { IUser } from '../../types';

type Props = {
  loading: boolean;
  tickets: any;
  currentUser: IUser;
};

export default function Ticket({ tickets, currentUser }: Props) {
  const [item, setItem] = useState(null);

  return (
    <>
      <Link href="/tickets/form">
        <Button btnStyle="success">
          <Icon icon="plus" /> &nbsp; Submit new ticket
        </Button>
      </Link>
      <br />
      <br />

      <StageTitle className="base-color">Tickets</StageTitle>

      {tickets.map(ticket => (
        <CategoryItem onClick={() => setItem(ticket)}>
          <CategoryContent>
            <h5 className="base-color">{ticket.name}</h5>
            <p>{ticket.description}</p>
          </CategoryContent>
        </CategoryItem>
      ))}

      <Detail
        item={item}
        onClose={() => setItem(null)}
        currentUser={currentUser}
      />
    </>
  );
}
