export const types = `
  type Task {
    _id: String!
    name: String!
    order: Float
    createdAt: Date
    hasNotified: Boolean
    assignedUserIds: [String]
    labelIds: [String]
    closeDate: Date
    description: String
    modifiedAt: Date
    modifiedBy: String
    isComplete: Boolean,
    stageId: String
    priority: String
    status: String
    attachments: [JSON]
    userId: String

    assignedUsers: [JSON]
    stage: JSON
    labels: [JSON]
    createdUser: JSON
  }
`;

export const queries = `
  clientPortalTasks: [Task]
`;