import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import KnowledgeBaseRouter from "./modules/knowledgeBase/routes";

const Routes = () => {
  return (
    <Router basename="/help">
        <KnowledgeBaseRouter />
    </Router>
  );
};

export default Routes;
