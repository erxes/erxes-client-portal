import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Layout from './modules/layouts/components/Layout';
import ForumList from './modules/forum/components/ForumList';
import ForumRouter from './modules/forum/routes';
const Routes = () => {
  return (
    <Router>
      <Layout>
        <Route path="/" exact component={ForumList} />
        <ForumRouter />
      </Layout>
    </Router>
  );
};

export default Routes;
