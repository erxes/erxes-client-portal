import { gql } from 'apollo-server-express';
import { mutations as CustomerMutations, queries as CustomerQueries, types as CustomerTypes } from './customers';
import { queries as KnowledgeBaseQueries, types as KnowledgeBaseTypes } from './knowledgeBase';
import { queries as TaskQueries, types as TaskTypes } from './task';
import { queries as TicketQueries, types as TicketTypes } from './ticket';

export const types = `
  scalar JSON
  scalar Date
  ${CustomerTypes}
  ${KnowledgeBaseTypes}
  ${TaskTypes}
  ${TicketTypes}
`;

export const queries = `
  type Query {
    ${CustomerQueries}
    ${KnowledgeBaseQueries}
    ${TaskQueries}
    ${TicketQueries}
  }
`;

export const mutations = `
  type Mutation {
    ${CustomerMutations}
  }
`;

const typeDefs = gql(`${types} ${queries} ${mutations}`);

export default typeDefs;