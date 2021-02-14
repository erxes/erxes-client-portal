import { sendGraphQLRequest } from '../../utils';

export const customerTickets = `
  query customerTickets($email: String!) {
    customerTickets(email: $email)
  }
`;

const ticketQueries = {
  async customerTickets(_root, { email }: { email: string }) {
    const response = await sendGraphQLRequest({
      query: customerTickets,
      name: 'customerTickets',
      variables: { email }
    });

    return response;
  }
};

export default ticketQueries;