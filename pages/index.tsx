import React from 'react';
import CategoriesContainer from '../modules/knowledgeBase/containers/CategoryList';
import Layout from '../modules/main/containers/Layout';
import { Store } from '../modules/types';

export default function Home() {
  return (
    <Layout>
      {(props: Store) => {
        return <CategoriesContainer {...props} />;
      }}
    </Layout>
  );
}
