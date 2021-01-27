export const types = `
  type Config {
    _id: String!
    name: String!
    description: String
    logo: String
    icon: String
    knowledgeBaseLabel: String
    knowledgeBaseTopicId: String
    taskLabel: String
    taskStageId: String
    ticketLabel: String
    ticketStageId: String
  }
`;

export const queries = `
  getConfig: Config
`;