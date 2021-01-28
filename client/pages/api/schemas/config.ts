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
  getConfig: Config
  getTaskStages: JSON
  getStageTasks(stageId: String!): JSON
`;