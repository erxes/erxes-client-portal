import { useRouter } from 'next/router';
import React from 'react';
import CategoryDetail from '../../../components/knowledgeBase/containers/CategoryDetail';
import Layout from '../../../components/main/containers/Layout';

export default function Category() {
  const router = useRouter();

  return (
    <Layout>
      <CategoryDetail queryParams={router.query} />
    </Layout>
  );
}
