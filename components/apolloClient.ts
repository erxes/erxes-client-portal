import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4300/api/graphql',
  cache: new InMemoryCache()
});

export const apiClient = new ApolloClient({
  uri: 'http://localhost:3300/graphql',
  cache: new InMemoryCache()
})

export default client;
