import { gql } from 'apollo-server-express';
import { mutations as CustomerMutations, queries as CustomerQueries, types as CustomerTypes } from './customers';
import { queries as KnowledgeBaseQueries, types as KnowledgeBaseTypes } from './knowledgeBase';

export const types = `
  scalar JSON
  scalar Date
  ${CustomerTypes}
  ${KnowledgeBaseTypes}
`;

export const queries = `
  type Query {
    ${CustomerQueries}
    ${KnowledgeBaseQueries}
  }
`;

export const mutations = `
  type Mutation {
    ${CustomerMutations}
  }
`;

const typeDefs = gql(`${types} ${queries} ${mutations}`);

export default typeDefs;