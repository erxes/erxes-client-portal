import React from "react";
import { Route } from "react-router-dom";
import queryString from "query-string";
import List from "./containers/List";
const routes = () => [
  <Route
    path="/tickets"
    exact
    key="tickets"
    component={({ location, history }) => {
      const queryParams = queryString.parse(location.search);
      return <List queryParams={queryParams} history={history} />;
    }}
  />
];

export default routes;
