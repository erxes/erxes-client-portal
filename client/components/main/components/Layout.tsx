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
    <>
      <Header topic={topic} config={config} />

      <MainContent>
        <Container>{children}</Container>
      </MainContent>

      <Footer topic={topic} />
    </>
  );
}

export default Layout;
