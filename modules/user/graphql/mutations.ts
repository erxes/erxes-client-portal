const login = `
  mutation login(
    $email: String!,
    $password: String!,
    $type: String,
    $description: String
  ) {
    login(
      email: $email,
      password: $password,
      type: $type,
      description: $description
    )
  }
`;

const createUser = `
  mutation userAdd(
    $configId: String!,
    $password: String!,
    $email: String,
    $firstName: String,
    $lastName: String,
    $phone: String,
    $type: String,
    $companyName: String,
    $companyRegistrationNumber: Int
  ) {
    userAdd(
      configId: $configId,
      email: $email,
      password: $password,
      firstName: $firstName,
      lastName: $lastName,
      phone: $phone,
      type: $type,
      companyName: $companyName,
      companyRegistrationNumber: $companyRegistrationNumber
    )
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
