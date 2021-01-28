import React, { useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import DumbLayout from '../components/Layout';
import { getKbTopicQuery } from '../../knowledgeBase/graphql/queries';
import { AppConsumer } from '../../appContext';
import { Config } from '../../types';

type Props = {
  children: React.ReactNode;
  topic?: any;
};

function Layout({ topic, ...props }: Props) {
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

  return <DumbLayout {...props} topic={topic} />;
}

const WithConsumer = props => {
  return (
    <AppConsumer>
      {({ config, topic }: { config?: Config, topic: any }) => {
        return <Layout {...props} config={config} topic={topic} />
      }}
    </AppConsumer>
  );
}

export default WithConsumer;