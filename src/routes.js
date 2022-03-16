import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "../src/modules/layouts/components/Layout";
import KnowledgeBaseRouter from "./modules/knowledgeBase/routes";

const Routes = () => {
  return (
    <Router>
      <KnowledgeBaseRouter />
    </Router>
  );
};

export default Routes;
