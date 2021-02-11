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
      <Header config={config} currentUser={currentUser} />

      <MainContent>
        <Container>{children}</Container>
      </MainContent>

      <Footer config={config} />
    </>
  );
}

export default Layout;
