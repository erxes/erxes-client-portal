import { ApolloServer, PlaygroundConfig } from "apollo-server-express";
import * as dotenv from "dotenv";
import resolvers from './data/resolvers';
import typeDefs from './data/schema';

// load config
dotenv.config();

const { NODE_ENV } = process.env;

let playground: PlaygroundConfig = false;

if (NODE_ENV !== 'production') {
  playground = {
    settings: {
      'general.betaUpdates': false,
      'editor.theme': 'dark',
      'editor.reuseHeaders': true,
      'tracing.hideTracingResponse': true,
      'editor.fontSize': 14,
      'editor.fontFamily': `'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace`,
      'request.credentials': 'include',
    },
  };
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground,
  uploads: false,
  context: ({ req, res, connection }) => {
    let customer = req && req.customer ? req.customer : null;

    if (!req) {
      if (connection && connection.context && connection.context.customer) {
        customer = connection.context.customer;
      }

      return { customer };
    }

    const requestInfo = {
      secure: req.secure,
      cookies: req.cookies,
    };

    return { customer, res, requestInfo };
  }
});

export default apolloServer;