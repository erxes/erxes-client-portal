const currentUser = `
  query currentUser {
    currentUser {
      _id
      email
      firstName
      lastName
      type
      companyName
      companyRegistrationNumber
      phone
    }
  }
`;

export { currentUser };
