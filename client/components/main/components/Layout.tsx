import React from 'react';
import Footer from './Footer';
import { Container, MainContent } from '../../styles/main';
import Header from './Header';

type Props = {
  topic: any;
  children: any;
};

function Layout({ topic, children }: Props) {
  return (
    <div className="layout">
      <Header topic={topic} />

      <MainContent>
        <Container className="main-body">{children}</Container>
      </MainContent>

      <Footer topic={topic} />
    </div>
  );
}

export default Layout;
