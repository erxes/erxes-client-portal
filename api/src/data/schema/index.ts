import { gql } from 'apollo-server-express';
import { mutations as CustomerMutations, queries as CustomerQueries, types as CustomerTypes } from './customers';

export const types = `
  scalar JSON
  scalar Date
  ${CustomerTypes}
`;

export const queries = `
  type Query {
    ${CustomerQueries}
  }
`;

export const mutations = `
  type Mutation {
    ${CustomerMutations}
  }
`;

const typeDefs = gql(`${types} ${queries} ${mutations}`);

export default typeDefs;