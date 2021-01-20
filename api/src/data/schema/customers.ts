export const types = `
  type Customer {
    _id: String!
    firstName: String
    lastName: String
    email: String!
    password: String!
  }
`;

export const queries = `
  customers(page: Int, perPage: Int): [Customer]
  customerDetail(_id: String!): Customer
  currentCustomer: Customer
`;

export const mutations = `
  login(email: String!, password: String!): String 
  logout: String
  forgotPassword(email: String!): String!
  resetPassword(token: String!, newPassword: String!): JSON
  customerAdd(email: String!, password: String!, firstName: String, lastName: String): String
  customerEdit(
    firstName: String,
    lastName: String,
    email: String!,
    password: String!
  ): Customer
  customerChangePassword(currentPassword: String!, newPassword: String!): Customer
`;