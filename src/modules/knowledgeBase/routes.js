import React from 'react';
import { Route } from 'react-router-dom';
import Categories from './containers/Categories';
import queryString from 'query-string';
import Lists from './components/Lists';
import Detail from './components/Detail';
const routes = () => [
  <Route
    path="/knowledge-base"
    exact
    key="knowledge-base"
    component={({ location, history }) => {
      const queryParams = queryString.parse(location.search);
      return <Categories queryParams={queryParams} history={history} />;
    }}
  />,
  <Route
    path="/knowledge-base-lists"
    exact
    key="knowledge-base-lists"
    component={({ location, history }) => {
      const queryParams = queryString.parse(location.search);
      return <Lists queryParams={queryParams} history={history} />;
    }}
  />,
  <Route
    path="/knowledge-base-detail"
    exact
    key="knowledge-base-detail"
    component={({ location, history }) => {
      const queryParams = queryString.parse(location.search);
      return <Detail queryParams={queryParams} history={history} />;
    }}
  />,
];

export default routes;
