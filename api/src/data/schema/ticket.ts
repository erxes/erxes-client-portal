export const types = `
  type Ticket {
    _id: String!
    source: String
    name: String!
    order: Float
    createdAt: Date
    labelIds: [String]
    closeDate: Date
    description: String
    modifiedAt: Date
    modifiedBy: String
    stageId: String
    priority: String
    status: String
    attachments: [JSON]
    userId: String

    assignedUsers: [User]
    labels: [JSON]
    createdUser: User
  }
`;

export const queries = `
  clientPortalTickets: [Ticket]
`;