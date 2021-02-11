import { useRouter } from 'next/router';
import React from 'react';
import TasksContainer from '../../components/task/containers/Tasks';
import Layout from '../../components/main/containers/Layout';

export default function Category() {
  return (
    <Layout>
      <TasksContainer />
    </Layout>
  );
}
