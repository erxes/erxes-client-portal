import { gql, useQuery, useMutation } from "@apollo/client";
import React, { useContext } from "react";
import { ApiApolloClientContext } from "../../../ApiContext";
import Detail from "../components/Detail";
import { IUser } from "../../types";

type Props = {
  _id?: string;
  currentUser: IUser;
  onClose: () => void;
};

const clientPortalGetTicket = `
  query clientPortalTicket($_id: String!) {
    clientPortalTicket(_id: $_id) {
      _id
      name
      description
      modifiedAt
      status
      priority
      createdAt

      comments {
        _id
        title
        content
        userId
        customerId
        createdAt
      }
    }
  }
`;

const createTicketComment = `
  mutation createTicketComment(
    $ticketId: String!
    $content: String!
    $email: String
  ) {
    createTicketComment(
      ticketId: $ticketId
      content: $content
      email: $email
    ) {
      _id
    }
  }
`;

function DetailContainer({ _id, ...props }: Props) {
  const apiClient = useContext(ApiApolloClientContext);

  const { data = {} } = useQuery(gql(clientPortalGetTicket), {
    variables: { _id },
    client: apiClient,
    skip: !_id,
  });

  const [createComment] = useMutation(gql(createTicketComment), {
    client: apiClient,
    refetchQueries: [{ query: gql(clientPortalGetTicket), variables: { _id } }],
  });

  const item = data.clientPortalTicket;

  const handleSubmit = (values: { content: string; email: string }) => {
    createComment({
      variables: {
        ...values,
        ticketId: item._id,
      },
    });
  };

  const updatedProps = {
    ...props,
    item,
    handleSubmit,
  };

  return <Detail {...updatedProps} />;
}

export default DetailContainer;
