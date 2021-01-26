export const types = `
  type KnowledgeBaseArticle {
    _id: String
    title: String
    summary: String
    content: String
    status: String
    reactionChoices: [String]
    reactionCounts: JSON
    createdBy: String
    createdUser: JSON
    createdDate: Date
    modifiedBy: String
    modifiedDate: Date
  }

  type KnowledgeBaseCategory {
    _id: String
    title: String
    description: String
    articles: [KnowledgeBaseArticle]
    icon: String
    createdBy: String
    createdDate: Date
    modifiedBy: String
    modifiedDate: Date

    firstTopic: KnowledgeBaseTopic
    authors: [JSON]
    numOfArticles: Float
  }

  type KnowledgeBaseTopic {
    _id: String
    title: String
    description: String
    categories: [KnowledgeBaseCategory]
    color: String
    backgroundImage: String
    languageCode: String
    createdBy: String
    createdDate: Date
    modifiedBy: String
    modifiedDate: Date
  }
`;

export const queries = `
  widgetsKnowledgeBaseArticles(topicId: String!, searchString: String!) : [KnowledgeBaseArticle]
  widgetsKnowledgeBaseTopicDetail(_id: String!): KnowledgeBaseTopic
  knowledgeBaseCategoryDetail(_id: String!): KnowledgeBaseCategory
  knowledgeBaseArticleDetail(_id: String!): KnowledgeBaseArticle
`;