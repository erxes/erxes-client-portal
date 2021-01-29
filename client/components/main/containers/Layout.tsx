import React, { useEffect } from 'react';
import Head from 'next/head';
import DumbLayout from '../components/Layout';
import AppProvider, { AppConsumer } from '../../appContext';
import { Config, Topic } from '../../types';

type Props = {
  children: React.ReactNode;
  config: Config;
  topic: Topic;
};

function Layout({ topic, config, ...props }: Props) {
  useEffect(() => {
    (window as any).erxesSettings = {
      messenger: {
        brand_id: '5fkS4v'
      }
    };

    (() => {
      const script = document.createElement('script');
      script.src = 'https://w.office.erxes.io/build/messengerWidget.bundle.js';
      script.async = true;

      const entry = document.getElementsByTagName('script')[0];
      entry.parentNode.insertBefore(script, entry);
    })();
  }, []);

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
          console.log(topic);
          return <Layout {...props} config={config} topic={topic} />;
        }}
      </AppConsumer>
    </AppProvider>
  );
};

export default WithConsumer;
