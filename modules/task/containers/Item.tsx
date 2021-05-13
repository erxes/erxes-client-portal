import { gql, useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { ApiApolloClientContext } from "../../ApiContext";
import Item from "../components/Item";
import Spinner from "../../common/Spinner";

type Props = {
  stageId: string;
  backgroundColor?: string;
};

const clientPortalGetTasks = `
  query clientPortalGetTasks($stageId: String!) {
    clientPortalGetTasks(stageId: $stageId) {
      _id
      name
      description
      labelIds
      priority
      modifiedAt
    }
  }
`;

function ItemContainer({ stageId, ...props }: Props) {
  const apiClient = useContext(ApiApolloClientContext);

  const { loading, data } = useQuery(gql(clientPortalGetTasks), {
    variables: { stageId },
    client: apiClient,
    skip: !stageId,
  });

  if (!data) {
    return null;
  }

  if (loading || Object.keys(data).length === 0) {
    return <Spinner objective={true} />;
  }

  const tasks = data.clientPortalGetTasks || [];

  const updatedProps = {
    ...props,
    tasks,
  };

  return <Item {...updatedProps} />;
}

export default ItemContainer;
