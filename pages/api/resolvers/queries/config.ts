import { sendGraphQLRequest } from '../../utils';

export const configClientPortal = `
  query getConfig($_id: String!) {
    getConfig(_id: $_id) {
      _id
      name
      description
      logo
      icon
      url
      knowledgeBaseLabel
      knowledgeBaseTopicId
      taskLabel
      taskPublicPipelineId
      taskStageId
      ticketLabel
      ticketStageId

      styles {
        bodyColor
        headerColor
        footerColor
        helpColor
        backgroundColor
        activeTabColor
        baseColor
        headingColor
        linkColor
        linkHoverColor
        baseFont
        headingFont
        dividerColor
        primaryBtnColor
        secondaryBtnColor
      }

      advanced {
        authAllow
        permission
        viewTicket
      }
    }
  }
`;

export const getTaskStages = `
  query getTaskStages($taskPublicPipelineId: String!) {
    getTaskStages(taskPublicPipelineId: $taskPublicPipelineId)
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

  async getTaskStages(_root, { taskPublicPipelineId }: { taskPublicPipelineId: string }) {
    const response = await sendGraphQLRequest({
      query: getTaskStages,
      name: 'getTaskStages',
      variables: { taskPublicPipelineId }
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
