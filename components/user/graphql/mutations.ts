const login = `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const createUser = `
  mutation userAdd($configId: String! $email: String!, $password: String!, $firstName: String!, $lastName: String) {
    userAdd(configId: $configId, email: $email, password: $password, firstName: $firstName, lastName: $lastName)
  }
`;

const logout = `
  mutation {
    logout
  }
`;

export default {
  login,
  logout,
  createUser
};
