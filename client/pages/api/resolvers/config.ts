import { sendGraphQLRequest } from '../utils';

export const configClientPortal = `
  query configClientPortal {
    configClientPortal {
      _id
      name
      description
      logo
      icon
      knowledgeBaseLabel
      knowledgeBaseTopicId
      taskLabel
      taskStageId
      ticketLabel
      ticketStageId
    }
  }
`;

const configQueries = {
  async getConfig(_root) {
    const response = await sendGraphQLRequest({
      query: configClientPortal,
      name: 'configClientPortal'
    });

    return response;
  }
};

export default configQueries;