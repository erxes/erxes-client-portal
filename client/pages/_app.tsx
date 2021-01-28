import '../styles/globals.css';
import 'erxes-icon/css/erxes.min.css';

import { ApolloProvider } from '@apollo/client';
import apolloClient from '../components/apolloClient';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
