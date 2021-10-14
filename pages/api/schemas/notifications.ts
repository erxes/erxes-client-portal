export const types = `
  type Notifaction {
    _id: String!
    notifType: String
    title: String
    link: String
    content: String
    action: String
    receiver: String
    date: Date
    isRead: Boolean
  }
`;

export const queries = `
  notifications: [Notifaction]
`;
