import { ApolloServer } from 'apollo-server-micro';
import resolvers from './resolvers';
import typeDefs from './schemas';
import { init } from './db/connection';

init();

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: '/api/graphql' });
