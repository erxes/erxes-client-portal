import React, { useState } from "react";
import { StageTitle } from "../../styles/tasks";
import { TicketListRow } from "../../styles/tickets";
import Button from "../../common/Button";
import Link from "next/link";
import Detail from "../containers/Detail";
import { IUser } from "../../types";
import dayjs from "dayjs";
import LoginContainer from "../../user/containers/Login";

type Props = {
  loading: boolean;
  tickets: any;
  currentUser: IUser;
};

export default function Ticket({ tickets, currentUser }: Props) {
  const [ticketId, setId] = useState(null);

  if (!currentUser) {
    return (
      <LoginContainer infoText="Log in first to create or manage ticket cards" />
    );
  }

  return (
    <>
      <StageTitle className="base-color">
        Tickets
        <Button
          btnStyle="success"
          uppercase={false}
          icon="plus-circle"
          size="medium"
        >
          <Link href="/tickets/form">Submit new ticket</Link>
        </Button>
      </StageTitle>

      <TicketListRow className="head">
        <div>Subject</div>
        <div>Created date</div>
        <div>Priority</div>
        <div>Status</div>
      </TicketListRow>

      {tickets.map((ticket) => (
        <TicketListRow
          onClick={() => setId(ticket._id)}
          key={ticket._id}
          className="item"
        >
          <div className="base-color">{ticket.name}</div>
          <div>{dayjs(ticket.createdAt).format("MMM D YYYY")}</div>
          <div>{ticket.priority}</div>
          <div>{ticket.status}</div>
        </TicketListRow>
      ))}

      <Detail
        _id={ticketId}
        onClose={() => setId(null)}
        currentUser={currentUser}
      />
    </>
  );
}
