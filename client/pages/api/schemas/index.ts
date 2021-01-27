import { gql } from "apollo-server-micro";
import { queries as ConfigQueries, types as ConfigTypes } from "./config";
import { queries as KnowledgeBaseQueries, types as KnowledgeBaseTypes } from "./knowledgeBase";

const types = `
  scalar JSON
  scalar Date
  ${ConfigTypes}
  ${KnowledgeBaseTypes}
`

const queries = `
  type Query {
    ${ConfigQueries}
    ${KnowledgeBaseQueries}
  }
`;

const typeDefs = gql(`${types} ${queries}`);

export default typeDefs;