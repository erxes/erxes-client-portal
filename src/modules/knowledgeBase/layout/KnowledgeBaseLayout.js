import React from 'react';
import { Container } from 'react-bootstrap';
import Search from '../../common/components/Search';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

function Layout(props) {
  const { location } = props;

  const queryParams = queryString.parse(location.search);

  return (
    <Container className="knowledge-base">
      <Search
        history={props.history}
        searchValue={queryParams.searchValue}
      ></Search>
      {props.children}
    </Container>
  );
}

export default withRouter(Layout);
