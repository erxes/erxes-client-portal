import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './modules/layouts/components/Layout';
import KnowledgeBaseRouter from './modules/knowledgeBase/routes';
import KnowledgeBaseLayout from './modules/knowledgeBase/layout/KnowledgeBaseLayout';
import TicketRouter from './modules/ticket/routes';

const Routes = () => {
  return (
    <Router>
      <Layout>
        <KnowledgeBaseLayout>
          <KnowledgeBaseRouter />
          <TicketRouter />
        </KnowledgeBaseLayout>
      </Layout>
    </Router>
  );
};

export default Routes;
