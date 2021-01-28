import React from 'react';
import Footer from './Footer';
import { Container, MainContent } from '../../styles/main';
import Header from './Header';

type Props = {
  kbTopic: any;
  children: any;
};

function Layout({ kbTopic, children }: Props) {
  return (
    <div className="layout">
      <Header kbTopic={kbTopic} />

      <MainContent>
        <Container className="main-body">{children}</Container>
      </MainContent>

      <Footer kbTopic={kbTopic} />
    </div>
  );
}

export default Layout;
