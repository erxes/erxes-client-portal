import React from 'react';
import { Route } from 'react-router-dom';
import Categories from './containers/Categories';
import queryString from 'query-string';
import Lists from './containers/Lists';
import Details from './containers/Details';

const articleDetails = ({ history, location }) => {
  const queryParams = queryString.parse(location.search);

  return <Details queryParams={queryParams} history={history} />;
};

const categories = ({ history, location }) => {
  const queryParams = queryString.parse(location.search);

  return <Categories queryParams={queryParams} history={history} />;
};

const routes = () => [
  <Route
    path='/knowledge-base'
    exact
    key='knowledge-base'
    component={categories}
  />,
  <Route
    path='/knowledge-base-lists'
    exact
    key='knowledge-base-lists'
    component={({ location, history }) => {
      const queryParams = queryString.parse(location.search);
      return <Lists queryParams={queryParams} history={history} />;
    }}
  />,
  <Route
    path='/knowledge-base-detail'
    exact
    key='knowledge-base-detail'
    component={articleDetails}
  />
];

export default routes;
