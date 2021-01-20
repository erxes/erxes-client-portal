import * as dotenv from 'dotenv';
import { getEnv } from 'erxes-api-utils';
import { graphql } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from '../data/schema';
import { debugDb } from '../debugger';
import { customerFactory } from './factories';
import mongoose = require('mongoose');

dotenv.config();

const NODE_ENV = getEnv({ name: 'NODE_ENV' });
const MONGO_URL = getEnv({ name: 'MONGO_URL', defaultValue: '' });

export const connectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  autoReconnect: true,
  useFindAndModify: false,
};

(mongoose.Promise as any) = global.Promise;

mongoose.connection
  .on('connected', () => {
    if (NODE_ENV !== 'test') {
      debugDb(`Connected to the database: ${MONGO_URL}`);
    }
  })
  .on('disconnected', () => {
    debugDb(`Disconnected from the database: ${MONGO_URL}`);
  })
  .on('error', error => {
    debugDb(`Database connection error: ${MONGO_URL}`, error);
  });

export const connect = async (URL?: string, options?) => {
  return mongoose.connect(URL || MONGO_URL, {
    ...connectionOptions,
    ...(options || { poolSize: 100 }),
  });
};

export function disconnect() {
  return mongoose.connection.close();
}

const schema = makeExecutableSchema({ typeDefs });

export const graphqlRequest = async (source: string = '', name: string = '', args?: any, context: any = {}) => {
  const res = {
    cookie: () => {
      return 'cookie';
    },
  };

  const finalContext: any = {};

  finalContext.requestInfo = { secure: false, cookies: [] };
  finalContext.customer = context.customer || (await customerFactory({}));
  finalContext.res = context.res || res;

  const rootValue = {};

  const response: any = await graphql(schema, source, rootValue, finalContext, args);

  if (response.errors || !response.data) {
    throw response.errors;
  }

  return response.data[name];
};