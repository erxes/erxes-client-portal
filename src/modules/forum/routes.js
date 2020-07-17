import React from 'react';
import { Route } from 'react-router-dom';
import ForumList from './components/ForumList';
import Forum from './components/Forum';
import queryString from 'query-string';
const routes = () => [
  <Route
    path="/forums"
    exact
    key="/forums"
    component={({ location, history }) => {
      const queryParams = queryString.parse(location.search);
      return <ForumList queryParams={queryParams} history={history} />;
    }}
  />,

  // <Route
  //   path="/profile/profile-edit"
  //   exact
  //   key="/profile-edit"
  //   component={({ location, history }) => {
  //     const queryParams = queryString.parse(location.search);
  //     return <ProfileEdit queryParams={queryParams} history={history} />;
  //   }}
  // />,
  <Route
    path="/forums/forum"
    exact
    key="/forum"
    component={({ location, history }) => {
      const queryParams = queryString.parse(location.search);
      return <Forum queryParams={queryParams} history={history} />;
    }}
  />
];

export default routes;
