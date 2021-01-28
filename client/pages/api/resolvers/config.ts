import { sendGraphQLRequest } from '../utils';

export const configClientPortal = `
  query configClientPortal {
    configClientPortal {
      _id
      name
      description
      logo
      icon
      url
      knowledgeBaseLabel
      knowledgeBaseTopicId
      taskLabel
      taskStageId
      ticketLabel
      ticketStageId
    }
  }
`;

export const getTaskStages = `
  query getTaskStages {
    getTaskStages
  }
`;

export const getTasks = `
  query getTasks($stageId: String!) {
    getTasks(stageId: $stageId)
  }
`;

const configQueries = {
  async getConfig(_root) {
    const response = await sendGraphQLRequest({
      query: configClientPortal,
      name: 'configClientPortal'
    });

    return response;
  },

  async getTaskStages() {
    const response = await sendGraphQLRequest({
      query: getTaskStages,
      name: 'getTaskStages'
    });

    return response;
  },

  async getTasks(_root, { stageId }: { stageId: string }) {
    const response = await sendGraphQLRequest({
      query: getTasks,
      name: 'getTasks',
      variables: { stageId }
    });

    return response;
  }
};

export default configQueries;