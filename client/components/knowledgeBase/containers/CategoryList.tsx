import React from "react";
import { gql, useLazyQuery } from "@apollo/client";
import * as queries from "../graphql/queries";
import CategoryList from "../components/CategoryList";
import { AppConsumer } from "../../appContext";
import { Topic } from "../../types";
import { useEffect } from "react";

type Props = {
  topic: Topic;
};

function CategoriesContainer({ topic }: Props) {
  const [fetchArticles, { loading, data = {} }] = useLazyQuery(
    gql(queries.widgetsKnowledgeBaseArticles)
  );

  useEffect(() => {
    if (topic) {
      fetchArticles({
        variables: {
          _id: topic._id,
          searchString: "",
        },
      });
    }
  }, [topic]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { widgetsKnowledgeBaseArticles = {} } = data;
  const articles = widgetsKnowledgeBaseArticles || [];

  return <CategoryList topic={topic} articles={articles} />;
}

const WithConsumer = (props) => {
  return (
    <AppConsumer>
      {({ topic }: { topic: Topic }) => {
        return <CategoriesContainer {...props} topic={topic} />;
      }}
    </AppConsumer>
  );
};

export default WithConsumer;
