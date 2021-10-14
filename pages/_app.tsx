import React, { useEffect } from 'react';
import 'react-select-plus/dist/react-select-plus.css';
import '../styles/globals.css';
import 'erxes-icon/css/erxes.min.css';

import { ApolloProvider } from '@apollo/client';
import withApolloClient from './lib/withApolloClient';
import { ApiApolloClientContext } from '../modules/ApiContext';

type Props = {
  apolloClient: any;
  apiClient: any;
  pageProps: any;
  Component: any;
  router: any;
};

function MyApp({
  Component,
  pageProps,
  apolloClient,
  apiClient,
  router
}: Props) {
  return (
    <ApiApolloClientContext.Provider value={apiClient}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} router={router} />
      </ApolloProvider>
    </ApiApolloClientContext.Provider>
  );
}

export default withApolloClient(MyApp);
