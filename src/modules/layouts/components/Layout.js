import React from "react";
import Header from "./Header";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

function Layout(props) {
  const { location } = props;

  const queryParams = queryString.parse(location.search);

  return (
    <div className="layout">
      <Header history={props.history} searchValue={queryParams.searchValue} />

      <Container className="main-body">{props.children}</Container>
    </div>
  );
}

export default withRouter(Layout);
