import { gql } from 'apollo-server-micro';
import {
  mutations as UserMutations,
  queries as UserQueries,
  types as UserTypes
} from './user';
import { queries as LogQueries, types as LogTypes } from './logs';
import { queries as ErxesQueries, types as ErxesTypes } from './erxes';
import {
  queries as NotificationQueries,
  types as NotificationTypes
} from './notifications';

const types = `
  scalar JSON
  scalar Date
  ${UserTypes}
  ${LogTypes}
  ${ErxesTypes}
  ${NotificationTypes}
`;

const queries = `
  type Query {
    ${UserQueries}
    ${LogQueries}
    ${ErxesQueries}
    ${NotificationQueries}
  }
`;

const mutations = `
  type Mutation {
    ${UserMutations}
  }
`;

const typeDefs = gql(`${types} ${queries} ${mutations}`);

export default typeDefs;
