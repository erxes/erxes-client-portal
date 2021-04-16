import React from 'react';
import Tasks from '../../modules/task/containers/Tasks';
import Layout from '../../modules/main/containers/Layout';

export default function Category() {
  return (
    <Layout>
      {props => {
        return <Tasks {...props} />;
      }}
    </Layout>
  );
}
