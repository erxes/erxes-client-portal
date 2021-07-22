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

const getCode = `
  mutation sendVerificationCode($phone: String!) {
    sendVerificationCode(phone: $phone)
  }
`;
const resetPassword = `
  mutation resetPasswordWithCode(
    $phone: String!,
    $password: String!,
    $code: String!,
  ) {
    resetPasswordWithCode(
      phone: $phone,
      password: $password,
      code: $code,
    )
  }
`;

export default {
  login,
  logout,
  createUser,
  getCode,
  resetPassword
};
