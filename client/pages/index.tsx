import React from 'react';
import AppProvider from '../components/appContext';
import CategoriesContainer from '../components/knowledgeBase/containers/CategoryList';
import Layout from '../components/main/containers/Layout';

export default function Home() {
  return (
    <AppProvider>
      <Layout>
        <CategoriesContainer />
      </Layout>
    </AppProvider>
  );
}
