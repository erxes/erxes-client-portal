const getKbTopicQuery = `
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

export default { getKbTopicQuery };
