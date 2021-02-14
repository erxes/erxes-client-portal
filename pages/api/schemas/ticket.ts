export const types = `
  type Ticket {
    _id: String!
    stageId: String!
    subject: String
    email: String!
    description: String
    priority: String
    createdAt: Date
  }
`;

export const queries = `
  customerTickets(email: String!): JSON
`;

export const mutations = `
  createCustomerTicket(
    stageId: String!
    subject: String!
    description: String
    email: String!
    priority: String
  ): JSON
`;
