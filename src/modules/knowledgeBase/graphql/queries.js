const categoryFields = `
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
`;

const articleFields = `
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
`;

const getKbTopicQuery = `
  query widgetsKnowledgeBaseTopicDetail($_id: String!) {
    widgetsKnowledgeBaseTopicDetail(_id: $_id) {
      _id
      title
      description
      color
      backgroundImage
      languageCode
      categories {
        ${categoryFields}
      }
      parentCategories {
        ${categoryFields}
        childrens {
          ${categoryFields}
        }
        articles{
          _id
          title        
        }
      }
    }
  }
`;

const getKbCategoryQuery = `
  query knowledgeBaseCategoryDetail($_id: String!) {
    knowledgeBaseCategoryDetail(_id: $_id) {
      ${categoryFields}
      articles {
        ${articleFields}
      }
    }
  }
`;

const getArticleDetailQuery = `
  query knowledgeBaseArticleDetail($_id: String!) {
    knowledgeBaseArticleDetail(_id: $_id) {
      ${articleFields}
    }
  }
`;

const widgetsKnowledgeBaseArticles = `
  query widgetsKnowledgeBaseArticles($topicId: String!, $searchString: String!) {
    widgetsKnowledgeBaseArticles(topicId: $topicId, searchString: $searchString) {
      ${articleFields}
    }
  }
`;

export default {
  getKbTopicQuery,
  getKbCategoryQuery,
  getArticleDetailQuery,
  widgetsKnowledgeBaseArticles
};