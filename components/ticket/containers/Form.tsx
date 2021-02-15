import { gql, useMutation } from "@apollo/client";
import React from "react";
import { Config, ICustomer, Ticket } from "../../types";
import Form from "../components/Form";

type Props = {
  config: Config;
  currentUser: ICustomer;
};

export const clientPortalCreateCustomer = `
  mutation clientPortalCreateCustomer(
    $stageId: String!
    $subject: String!
    $description: String
    $email: String!
    $priority: String
  ) {
    clientPortalCreateCustomer(
      stageId: $stageId
      subject: $subject
      description: $description
      email: $email
      priority: $priority
    ) {
      _id
    }
  }
`;

function FormContainer({ config = {}, currentUser, ...props }: Props) {
  const [createTicket] = useMutation(gql(clientPortalCreateCustomer));

  const handleSubmit = (doc: Ticket) => {
    createTicket({
      variables: {
        ...doc,
        stageId: config.ticketStageId,
        email: currentUser.email,
        priority: "Critical", // TODO: Add select in Form
      },
    })
      .then(() => {
        window.location.href = '/tickets';
      });
  };

  const updatedProps = {
    ...props,
    handleSubmit,
  };

  return <Form {...updatedProps} />;
}

export default FormContainer;
