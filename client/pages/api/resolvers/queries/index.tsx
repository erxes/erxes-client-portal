import user from './user';
import config from './config';
import knowledgeBase from './knowledgeBase';

export default {
  ...user,
  ...config,
  ...knowledgeBase
}