export const types = `
  type Config {
    _id: String!
    name: String!
    description: String
    logo: String
    icon: String
    url: String
    knowledgeBaseLabel: String
    knowledgeBaseTopicId: String
    taskLabel: String
    taskStageId: String
    ticketLabel: String
    ticketStageId: String
  }
`;

export const queries = `
  getConfig(_id: String!): Config
  getTaskStages(stageId: String!): JSON
  getTasks(stageId: String!): JSON
`;
