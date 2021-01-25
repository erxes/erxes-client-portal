import { sendGraphQLRequest } from "../../../utils";

const clientPortalTasks = `
  query clientPortalTasks {
    clientPortalTasks {
      _id
      name
      status
      description
    }
  }
`;

const taskQueries = {
  async clientPortalTasks(_root) {
    const response = await sendGraphQLRequest({
      query: clientPortalTasks,
      name: 'clientPortalTasks'
    });

    return response;
  }
};

export default taskQueries;