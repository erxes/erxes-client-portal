import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./modules/layouts/components/Layout";
import KnowledgeBaseRouter from "./modules/knowledgeBase/routes";

const Routes = () => {
  return (
    <Router basename="/help">
      <Layout>
        <KnowledgeBaseRouter />
      </Layout>
    </Router>
  );
};

export default Routes;
