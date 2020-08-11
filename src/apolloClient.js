import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';

const { REACT_APP_API_URL } = process.env;

// Create an http link:
const httpLink = createHttpLink({
  uri: `${REACT_APP_API_URL}/graphql`,
});

// Attach user credentials
const middlewareLink = setContext(() => ({
  headers: {
    'x-token': localStorage.getItem('hotelLoginToken'),
    'x-refresh-token': localStorage.getItem('hotelLoginRefreshToken'),
  },
}));

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const {
      response: { headers },
    } = context;

    if (headers) {
      const token = headers.get('x-token');
      const refreshToken = headers.get('x-refresh-token');

      if (token) {
        localStorage.setItem('hotelLoginToken', token);
      }

      if (refreshToken) {
        localStorage.setItem('hotelLoginRefreshToken', refreshToken);
      }
    }

    return response;
  });
});

// Network error
const errorLink = onError(
  ({ operation, response, graphQLErrors, networkError }) => {
    if (networkError) {
      console.log(response);
      console.log(graphQLErrors);
      console.log(networkError);
      window.alert('Disconnect ...');
    }
  }
);

// Combining httpLink and warelinks altogether
const httpLinkWithMiddleware = errorLink.concat(
  afterwareLink.concat(middlewareLink.concat(httpLink))
);

// Creating Apollo-client
const client = new ApolloClient({
  link: httpLinkWithMiddleware,
  cache: new InMemoryCache(),
});

export default client;
