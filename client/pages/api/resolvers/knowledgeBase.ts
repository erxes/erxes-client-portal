import { sendGraphQLRequest } from '../utils';

export const widgetsKnowledgeBaseArticles = `
  query widgetsKnowledgeBaseArticles($topicId: String!, $searchString: String!) {
    widgetsKnowledgeBaseArticles(topicId: $topicId, searchString: $searchString) {
      _id
      title
      summary
      content
      createdBy
      createdDate
      modifiedBy
      modifiedDate
      createdUser {
        details {
          fullName
          avatar
        }
      }
    }
  }
`;

export const getKbTopicQuery = `
  query widgetsKnowledgeBaseTopicDetail($_id: String!) {
    widgetsKnowledgeBaseTopicDetail(_id: $_id) {
      title
      description
      color
      backgroundImage
      languageCode
      categories {
        _id
        title
        description
        icon
        numOfArticles
        authors {
          details {
            fullName
            avatar
          }
        }
      }
    }
  }
`;

export const getKbCategoryQuery = `
  query knowledgeBaseCategoryDetail($_id: String!) {
    knowledgeBaseCategoryDetail(_id: $_id) {
      _id
      title
      description
      numOfArticles
      icon
      authors {
        details {
          fullName
          avatar
        }
      }
      articles {
        _id
        title
        summary
        content
        reactionChoices
        createdBy
        createdDate
        modifiedBy
        modifiedDate
        createdUser {
          details {
            fullName
            avatar
          }
        }
      }
    }
  }
`;

export const getArticleDetailQuery = `
  query knowledgeBaseArticleDetail($_id: String!) {
    knowledgeBaseArticleDetail(_id: $_id) {
      _id
      title
      summary
      content
      status
      reactionChoices
      reactionCounts
      createdBy
      createdUser {
        details {
          fullName
          avatar
        }
      }
      createdDate
      modifiedBy
      modifiedDate
    }
  }
`;

const knowledgeBaseQueries = {
  async widgetsKnowledgeBaseArticles(_root, args: { topicId: string, searchString: string }) {
    const response = await sendGraphQLRequest({
      query: widgetsKnowledgeBaseArticles,
      variables: args,
      name: 'widgetsKnowledgeBaseArticles'
    });

    return response;
  },

  async knowledgeBaseArticleDetail(_root, args: { _id: string }) {
    const response = await sendGraphQLRequest({
      query: getArticleDetailQuery,
      variables: args,
      name: 'knowledgeBaseArticleDetail'
    })

    return response;
  },

  async knowledgeBaseCategoryDetail(_root, args: { _id: string }) {
    const response = await sendGraphQLRequest({
      query: getKbCategoryQuery,
      variables: args,
      name: 'knowledgeBaseCategoryDetail'
    })

    return response;
  },

  async widgetsKnowledgeBaseTopicDetail(_root, args: { _id: string }) {
    const response = await sendGraphQLRequest({
      query: getKbTopicQuery,
      variables: args,
      name: 'widgetsKnowledgeBaseTopicDetail'
    });

    return response;
  }
};

export default knowledgeBaseQueries;