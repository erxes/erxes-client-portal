export const getKbTopicQuery = `
  query widgetsKnowledgeBaseTopicDetail($_id: String!) {
    widgetsKnowledgeBaseTopicDetail(_id: $_id) {
      _id
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
      createdUser
    }
  }
`;

export const categoryDetailQuery = `
  query knowledgeBaseCategoryDetail($_id: String!) {
    knowledgeBaseCategoryDetail(_id: $_id) {
      _id
      title
      description
      numOfArticles
      icon
      authors
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
        createdUser
      }
    }
  }
`;

export const articleDetailQuery = `
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
      createdUser
      createdDate
      modifiedBy
      modifiedDate
    }
  }
`;