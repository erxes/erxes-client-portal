import React, { useState } from 'react';
import { StageTitle } from '../../styles/tasks';
import {
  CategoryItem,
  CategoryContent
} from '../../knowledgeBase/components/styles';
import Button from '../../common/Button';
import Icon from '../../common/Icon';
import Link from 'next/link';
import Detail from '../containers/Detail';
import { IUser } from '../../types';

type Props = {
  loading: boolean;
  tickets: any;
  currentUser: IUser;
};

export default function Ticket({ tickets, currentUser }: Props) {
  const [ticketId, setId] = useState(null);

  if (!currentUser) {
    return (
      <Link href="/user/login">
        <Button>
          <Icon icon="user" /> &nbsp; login
        </Button>
      </Link>
    );
  }

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
        <CategoryItem onClick={() => setId(ticket._id)} key={ticket._id}>
          <CategoryContent>
            <h5 className="base-color">{ticket.name}</h5>
            <p>{ticket.description}</p>
            <p>{ticket.priority}</p>
            <p>{ticket.status}</p>
          </CategoryContent>
        </CategoryItem>
      ))}

      <Detail
        _id={ticketId}
        onClose={() => setId(null)}
        currentUser={currentUser}
      />
    </>
  );
}
