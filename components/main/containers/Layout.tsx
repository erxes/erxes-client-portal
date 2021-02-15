import React from 'react';
import Head from 'next/head';
import DumbLayout from '../components/Layout';
import AppProvider, { AppConsumer } from '../../appContext';
import { Config, Topic, ICustomer, Store } from '../../types';

type Props = {
  children: React.ReactNode;
  config: Config;
  topic: Topic;
  currentUser?: ICustomer;
};

function Layout({ topic, config = {}, ...props }: Props) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={config.icon || ''}
          type="image/x-icon"
        />
      </Head>
      <DumbLayout {...props} config={config} topic={topic} />
    </>
  );
}

const WithConsumer = props => {
  return (
    <AppProvider>
      <AppConsumer>
        {({ config, topic }: Store) => {
          return (
            <Layout
              {...props}
              config={config}
              topic={topic}
            />
          );
        }}
      </AppConsumer>
    </AppProvider>
  );
};

export default WithConsumer;
