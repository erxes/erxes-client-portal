import React, { useEffect } from 'react';
import '../styles/globals.css';
import 'erxes-icon/css/erxes.min.css';

import { ApolloProvider } from '@apollo/client';
import apolloClient from '../components/apolloClient';

function MyApp({ Component, pageProps }) {
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
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
