import React, { useEffect } from 'react';
import 'react-select-plus/dist/react-select-plus.css';
import '../styles/globals.css';
import 'erxes-icon/css/erxes.min.css';

import { ApolloProvider } from '@apollo/client';
import withApolloClient from './lib/withApolloClient';
import { ApiApolloClientContext } from '../components/ApiContext';

type Props = {
  apolloClient: any
  apiClient: any;
  pageProps: any;
  Component: any;
};

function MyApp({ Component, pageProps, apolloClient, apiClient }: Props) {
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
    <ApiApolloClientContext.Provider value={apiClient}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ApiApolloClientContext.Provider>
  );
}

export default withApolloClient(MyApp);
