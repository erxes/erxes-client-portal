export const types = `
  type User {
    _id: String!
    firstName: String
    lastName: String
    email: String!
    password: String!
  }
`;

export const queries = `
  userDetail(_id: String!): User
  currentUser: User
`;

export const mutations = `
  login(email: String!, password: String!): String
  logout: String
  forgotPassword(email: String!): String!
  resetPassword(token: String!, newPassword: String!): JSON
  userAdd(email: String!, password: String!, firstName: String, lastName: String): String
  userEdit(
    firstName: String,
    lastName: String,
    email: String!,
    password: String!
  ): User
  userChangePassword(currentPassword: String!, newPassword: String!): User
`;
