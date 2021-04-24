import { gql } from 'apollo-server-micro';
import {
  mutations as UserMutations,
  queries as UserQueries,
  types as UserTypes
} from './user';
import { queries as LogQueries, types as LogTypes } from './logs';

const types = `
  scalar JSON
  scalar Date
  ${UserTypes}
  ${LogTypes}
`;

const queries = `
  type Query {
    ${UserQueries}
    ${LogQueries}
  }
`;

const mutations = `
  type Mutation {
    ${UserMutations}
  }
`;

const typeDefs = gql(`${types} ${queries} ${mutations}`);

export default typeDefs;
