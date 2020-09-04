import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './modules/layouts/components/Layout';
import KnowledgeBaseRouter from './modules/knowledgeBase/routes';
import KnowledgeBaseLayout from './modules/knowledgeBase/layout/KnowledgeBaseLayout';

const Routes = () => {
  return (
    <Router basename="/help">
      <Layout>
        <KnowledgeBaseLayout>
          <KnowledgeBaseRouter />
        </KnowledgeBaseLayout>
      </Layout>
    </Router>
  );
};

export default Routes;
