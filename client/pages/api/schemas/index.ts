import { gql } from 'apollo-server-micro';
import { queries as ConfigQueries, types as ConfigTypes } from './config';
import {
  queries as KnowledgeBaseQueries,
  types as KnowledgeBaseTypes
} from './knowledgeBase';
import {
  mutations as UserMutations,
  queries as UserQueries,
  types as UserTypes
} from './user';

const types = `
  scalar JSON
  scalar Date
  ${ConfigTypes}
  ${KnowledgeBaseTypes}
  ${UserTypes}
`;

const queries = `
  type Query {
    ${ConfigQueries}
    ${KnowledgeBaseQueries}
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
