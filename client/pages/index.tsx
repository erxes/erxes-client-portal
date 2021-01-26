import React from 'react';
import CategoriesContainer from '../components/knowledgeBase/containers/CategoryList';
import Layout from '../components/knowledgeBase/main/containers/Layout';

export default function Home() {
  return (
    <Layout>
      <CategoriesContainer />
    </Layout>
  )
}
