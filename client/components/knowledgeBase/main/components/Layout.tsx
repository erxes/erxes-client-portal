import React from 'react';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
import Header from './Header';

type Props = {
  kbTopic: any;
  children: any;
};

function Layout({ kbTopic, children }: Props) {
  return (
    <div className="layout">
      <Header kbTopic={kbTopic} />
      <Container className="main-body">
        {children}
      </Container>
      <Footer kbTopic={kbTopic} />
    </div>
  );
}

export default Layout;