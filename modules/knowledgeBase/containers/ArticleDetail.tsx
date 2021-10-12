import { gql, useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { ApiApolloClientContext } from "../../ApiContext";
import ArticleDetail from "../components/ArticleDetail";
import { articleDetailQuery, categoryDetailQuery } from "../graphql/queries";
import { AppConsumer } from "../../appContext";
import { Store } from "../../types";

type Props = {
  queryParams: any;
};

function ArticleDetailContainer({
  queryParams: { id, catId },
  ...props
}: Props) {
  const apiClient = useContext(ApiApolloClientContext);

  const { loading, data = {} as any } = id
    ? useQuery(gql(articleDetailQuery), {
        variables: { _id: id },
        client: apiClient,
        skip: !id,
      })
    : { loading: true };

  const { data: catData = {} as any } =
    catId &&
    useQuery(gql(categoryDetailQuery), {
      variables: { _id: catId },
      client: apiClient,
      skip: !catId,
    });

  const article = data.knowledgeBaseArticleDetail || {};
  const category = catData.knowledgeBaseCategoryDetail || {};

  const updatedProps = {
    ...props,
    loading,
    article,
    category,
  };

  return (
    <AppConsumer>
      {({ topic }: Store) => {
        return <ArticleDetail {...updatedProps} topic={topic} />;
      }}
    </AppConsumer>
  );
}

export default ArticleDetailContainer;
