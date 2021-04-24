export const types = `
  type User {
    _id: String!
    firstName: String
    lastName: String
    phone: String
    email: String!
    password: String!
  }
`;

export const queries = `
  userDetail(_id: String!): User
  currentUser: User
`;

const userParams = `
  email: String!,
  password: String!,
  firstName: String!,
  lastName: String,
  phone: String
`;

export const mutations = `
  login(email: String!, password: String!): String
  logout: String
  forgotPassword(email: String!): String!
  resetPassword(token: String!, newPassword: String!): JSON
  userAdd(configId: String!, ${userParams}): String
  userEdit(_id: String!, ${userParams}): User
  userChangePassword(currentPassword: String!, newPassword: String!): User
`;
