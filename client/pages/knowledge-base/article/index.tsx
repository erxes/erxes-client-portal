import { useRouter } from 'next/router';
import React from 'react';
import ArticleDetail from '../../../components/knowledgeBase/containers/ArticleDetail';
import Layout from '../../../components/main/containers/Layout';

export default function Category() {
  const router = useRouter();

  return (
    <Layout>
      <ArticleDetail queryParams={router.query} />
    </Layout>
  );
}
