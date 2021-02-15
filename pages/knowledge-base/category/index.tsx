import { useRouter } from "next/router";
import React from "react";
import CategoryDetail from "../../../components/knowledgeBase/containers/CategoryDetail";
import Layout from "../../../components/main/containers/Layout";
import { Store } from "../../../components/types";

export default function Category() {
  const router = useRouter();

  return (
    <Layout>
      {(props: Store) => {
        return <CategoryDetail {...props} queryParams={router.query} />;
      }}
    </Layout>
  );
}
