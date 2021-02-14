import { sendGraphQLRequest } from "../../utils";

interface ITicket {
  email: string;
  stageId: string;
  subject: string;
  description: string;
  priority: string;
};

export const createTicketMutation = `
  mutation createCustomerTicket(
    $stageId: String!
    $subject: String!
    $description: String
    $email: String!
    $priority: String
  ) {
    createCustomerTicket(
      stageId: $stageId
      subject: $subject
      description: $description
      email: $email
      priority: $priority
    )
  }
`;

const ticketMutations = {
  async createCustomerTicket(_root, args: ITicket) {
    const response = await sendGraphQLRequest({
      query: createTicketMutation,
      name: 'createCustomerTicket',
      variables: { ...args }
    });

    return response;
  }
};

export default ticketMutations;