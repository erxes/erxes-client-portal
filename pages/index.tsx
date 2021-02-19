import React from 'react';
import CategoriesContainer from '../components/knowledgeBase/containers/CategoryList';
import Layout from '../components/main/containers/Layout';
import { Store } from '../components/types';

export default function Home() {
  return (
    <Layout>
      {(props: Store) => {
        return <CategoriesContainer {...props} />;
      }}
    </Layout>
  );
}
