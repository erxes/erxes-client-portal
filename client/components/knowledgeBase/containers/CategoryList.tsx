import React from "react";
import { gql, useQuery } from "@apollo/client";
import * as queries from "../graphql/queries";
import CategoryList from "../components/CategoryList";

type Props = {};

function CategoriesContainer(props: Props) {
  const kbTopicResponse = useQuery<any>(gql(queries.getKbTopicQuery), {
    variables: { _id: "pmDpoLdnMCBtxY5NC" },
  });
  const articlesResponse = useQuery<any>(
    gql(queries.widgetsKnowledgeBaseArticles),
    { variables: { _id: "pmDpoLdnMCBtxY5NC", searchString: "" } }
  );

  if (kbTopicResponse.loading || articlesResponse.loading) {
    return <div>Loading...</div>;
  }

  const { widgetsKnowledgeBaseTopicDetail } = kbTopicResponse.data || {};
  const { widgetsKnowledgeBaseArticles } = articlesResponse.data || {};

  const kbTopic = widgetsKnowledgeBaseTopicDetail || {};
  const articles = widgetsKnowledgeBaseArticles || [];

  return <CategoryList kbTopic={kbTopic} articles={articles} />;
}

export default CategoriesContainer;
