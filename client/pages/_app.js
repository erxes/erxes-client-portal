import '../styles/globals.css'
import '../styles/app.scss'
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../components/apolloClient';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
