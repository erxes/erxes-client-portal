import { useRouter } from 'next/router';
import React from 'react';
import ArticleDetail from '../../../components/knowledgeBase/containers/ArticleDetail';
import Layout from '../../../components/main/containers/Layout';

export default function Category() {
  const router = useRouter();

  return (
    <Layout>
      {props => {
        return <ArticleDetail {...props} queryParams={router.query} />;
      }}
    </Layout>
  );
}
