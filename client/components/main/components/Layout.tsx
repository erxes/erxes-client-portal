import React from 'react';
import Footer from './Footer';
import { Container, MainContent } from '../../styles/main';
import Header from '../containers/Header';
import { Config, ICustomer } from '../../types';

type Props = {
  topic: any;
  config: Config;
  children: any;
  currentUser?: ICustomer;
};

function Layout({ config, topic, children, currentUser }: Props) {
  return (
    <>
      <Header topic={topic} config={config} currentUser={currentUser} />

      <MainContent>
        <Container>{children}</Container>
      </MainContent>

      <Footer topic={topic} />
    </>
  );
}

export default Layout;
