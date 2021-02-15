import React from "react";
import Tasks from "../../components/task/containers/Tasks";
import Layout from "../../components/main/containers/Layout";

export default function Category() {
  return (
    <Layout>
      {(props) => {
        return <Tasks {...props} />;
      }}
    </Layout>
  );
}
