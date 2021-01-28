import React from 'react';
import Footer from './Footer';
import { Container, MainContent } from '../../styles/main';
import Header from './Header';
import { Config } from '../../types';

type Props = {
  topic: any;
  config: Config;
  children: any;
};

function Layout({ config, topic, children }: Props) {
  return (
    <div className="layout">
      <Header topic={topic} config={config} />

      <MainContent>
        <Container className="main-body">{children}</Container>
      </MainContent>

      <Footer topic={topic} />
    </div>
  );
}

export default Layout;
