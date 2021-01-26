import knowledgeBase from './knowledgeBase';

const resolvers = {
  Query: {
    ...knowledgeBase
  }
};

export default resolvers;