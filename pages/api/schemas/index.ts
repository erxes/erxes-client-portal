import { gql } from 'apollo-server-micro';
import {
  mutations as UserMutations,
  queries as UserQueries,
  types as UserTypes
} from './user';


const types = `
  scalar JSON
  scalar Date
  ${UserTypes}
`;

const queries = `
  type Query {
    ${UserQueries}
  }
`;

const mutations = `
  type Mutation {
    ${UserMutations}
  }
`;

const typeDefs = gql(`${types} ${queries} ${mutations}`);

export default typeDefs;
