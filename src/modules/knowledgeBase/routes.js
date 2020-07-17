import React from 'react';
import { Route } from 'react-router-dom';
import Lists from './components/Lists';
import queryString from 'query-string';
const routes = () => [
  <Route
    path='/knowledge-base'
    exact
    key='knowledge-base'
    component={({ location, history }) => {
      const queryParams = queryString.parse(location.search);
      return <Lists queryParams={queryParams} history={history} />;
    }}
  />,
];

export default routes;
