import { gql, useMutation } from "@apollo/client";
import React from "react";
import { createTicketMutation } from "../../../pages/api/resolvers/mutations/tickets";
import { AppConsumer } from "../../appContext";
import { Config, ICustomer, Ticket } from "../../types";
import Form from "../components/Form";

type Props = {
  config: Config;
  currentUser: ICustomer;
};

function FormContainer({ config = {}, currentUser, ...props }: Props) {
  const [createTicket] = useMutation(gql(createTicketMutation));

  const handleSubmit = (doc: Ticket) => {
    createTicket({
      variables: {
        ...doc,
        stageId: config.ticketStageId,
        email: currentUser.email,
        priority: "Critical", // TODO: Add select in Form
      },
    });
  };

  const updatedProps = {
    ...props,
    handleSubmit,
  };

  return <Form {...updatedProps} />;
}

const WithConsumer = (props) => {
  return (
    <AppConsumer>
      {({
        config,
        currentUser,
      }: {
        config: Config;
        currentUser: ICustomer;
      }) => {
        return (
          <FormContainer {...props} config={config} currentUser={currentUser} />
        );
      }}
    </AppConsumer>
  );
};

export default WithConsumer;
