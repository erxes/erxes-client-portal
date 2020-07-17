import React from 'react';
import { Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import queryString from 'query-string';
const routes = () => [
  <Route
    path='/log-in'
    exact
    key='log-in'
    component={({ location, history }) => {
      const queryParams = queryString.parse(location.search);
      return <LogIn queryParams={queryParams} history={history} />;
    }}
  />,
];

export default routes;
