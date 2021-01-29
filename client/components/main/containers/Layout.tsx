import React from 'react';
import Head from 'next/head';
import DumbLayout from '../components/Layout';
import AppProvider, { AppConsumer } from '../../appContext';
import { Config, Topic } from '../../types';

type Props = {
  children: React.ReactNode;
  config: Config;
  topic: Topic;
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
        {({ config, topic }: { config?: Config; topic: any }) => {
          return <Layout {...props} config={config} topic={topic} />;
        }}
      </AppConsumer>
    </AppProvider>
  );
};

export default WithConsumer;
