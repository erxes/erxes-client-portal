import React from 'react';
import CategoriesContainer from '../components/knowledgeBase/containers/CategoryList';
import Layout from '../components/main/containers/Layout';

export default function Home() {
  return (
    <Layout>
      {({ config, topic }: any) => {
        return <CategoriesContainer config={config} topic={topic} />;
      }}
    </Layout>
  );
}
