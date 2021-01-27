import config from './config';
import knowledgeBase from './knowledgeBase';

const resolvers = {
  Query: {
    ...knowledgeBase,
    ...config
  }
};

export default resolvers;