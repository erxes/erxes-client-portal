import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Head from 'next/head';
import DumbLayout from '../components/Layout';
import AppProvider, { AppConsumer } from '../../appContext';
import { Config, Topic, ICustomer } from '../../types';
import { currentUser as currentUserQuery } from '../../user/graphql/queries';

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
  const { data = {} } = useQuery(gql(currentUserQuery));
  const currentUser = data.currentUser;

  return (
    <AppProvider currentUser={currentUser}>
      <AppConsumer>
        {({ config, topic }: { config?: Config; topic: any }) => {
          return (
            <Layout
              {...props}
              config={config}
              topic={topic}
              currentUser={currentUser}
            />
          );
        }}
      </AppConsumer>
    </AppProvider>
  );
};

export default WithConsumer;
