import { sendGraphQLRequest } from "../../../utils";

const clientPortalTickets = `
  query clientPortalTickets {
    clientPortalTickets {
      _id
      name
      status
    }
  }
`;

const ticketQueries = {
  async clientPortalTickets(_root) {
    const response = await sendGraphQLRequest({
      query: clientPortalTickets,
      name: 'clientPortalTickets'
    });

    return response;
  }
};

export default ticketQueries;