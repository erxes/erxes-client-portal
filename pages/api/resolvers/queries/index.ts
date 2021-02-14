import config from './config';
import knowledgeBase from './knowledgeBase';
import ticket from './ticket';
import user from './user';

export default {
  ...user,
  ...config,
  ...ticket,
  ...knowledgeBase
}