const currentUser = `
  query currentUser {
    currentUser {
      _id
      email
      firstName
      lastName
    }
  }
`;

export { currentUser };
