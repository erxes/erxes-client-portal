import React from 'react';
import { Route } from 'react-router-dom';
import queryString from 'query-string';
import TicketList from './containers/TicketList';
const routes = () => [
  <Route
    path='/tickets'
    exact
    key='tickets'
    component={({ location, history }) => {
      const queryParams = queryString.parse(location.search);
      const { labelId } = queryParams;
      const { searchValue } = queryParams;

      return (
        <TicketList
          queryParams={queryParams}
          history={history}
          labelId={labelId}
          searchValue={searchValue}
        />
      );
    }}
  />
];

export default routes;
