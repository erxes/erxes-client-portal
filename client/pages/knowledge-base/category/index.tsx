import { useRouter } from 'next/router';
import React from 'react';
import CategoryDetail from '../../../components/knowledgeBase/components/CategoryDetail';
import Layout from '../../../components/main/containers/Layout';

export default function Category() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <CategoryDetail categoryId={id.toString()} />
    </Layout>
  );
}
