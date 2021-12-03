import { gql, useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { ApiApolloClientContext } from "../../../ApiContext";
import { Topic } from "../../types";
import CategoryDetail from "../components/CategoryDetail";
import { categoryDetailQuery } from "../graphql/queries";

type Props = {
  queryParams: any;
  topic: Topic;
};

function CategoryDetailContainer({ queryParams: { id }, ...props }: Props) {
  const apiClient = useContext(ApiApolloClientContext);

  const { loading, data = {} as any } = useQuery(gql(categoryDetailQuery), {
    variables: { _id: id },
    skip: !id,
    client: apiClient,
  });

  const category = data.knowledgeBaseCategoryDetail || {};

  const updatedProps = {
    ...props,
    loading,
    category,
  };

  return <CategoryDetail {...updatedProps} />;
}

export default CategoryDetailContainer;
