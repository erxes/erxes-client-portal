import { gql } from "apollo-server-micro";
import { queries as KnowledgeBaseQueries, types as KnowledgeBaseTypes } from "./knowledgeBase";

const types = `
  scalar JSON
  scalar Date
  ${KnowledgeBaseTypes}
`

const queries = `
  type Query {
    ${KnowledgeBaseQueries}
  }
`;

const typeDefs = gql(`${types} ${queries}`);

export default typeDefs;