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
        authors
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
      createdUser {
        details {
          fullName
          avatar
        }
      }
    }
  }
`;