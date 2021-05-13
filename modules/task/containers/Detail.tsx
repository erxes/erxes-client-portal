import { gql, useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { ApiApolloClientContext } from "../../ApiContext";
import Detail from "../components/Detail";
import Spinner from "../../common/Spinner";

type Props = {
  _id?: string;
  renderDate: (date: Date) => React.ReactNode;
  onClose: () => void;
};

const clientPortalGetTask = `
  query clientPortalTask($_id: String!) {
    clientPortalTask(_id: $_id) {
      _id
      name
      description
      priority
      modifiedAt
      createdAt
    }
  }
`;

function DetailContainer({ _id, ...props }: Props) {
  const apiClient = useContext(ApiApolloClientContext);

  const { data } = useQuery(gql(clientPortalGetTask), {
    variables: { _id },
    client: apiClient,
    skip: !_id,
  });

  if (!data) {
    return null;
  }

  if (Object.keys(data).length === 0) {
    return <Spinner objective={true} />;
  }

  const item = data.clientPortalTask || {};

  const updatedProps = {
    ...props,
    item,
  };

  return <Detail {...updatedProps} />;
}

export default DetailContainer;
