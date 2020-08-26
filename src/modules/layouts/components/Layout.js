import React from 'react';
import Header from './Header';
import { Container } from 'react-bootstrap';

function Layout(props) {
  return (
    <div className="layout">
      <Header />

      <Container className="main-body">{props.children}</Container>
    </div>
  );
}

export default Layout;
