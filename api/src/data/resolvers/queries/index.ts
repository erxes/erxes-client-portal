import customers from './customers';
import knowledgeBase from './knowledgeBase';
import task from './task';
import ticket from './ticket';

export default {
  ...customers,
  ...knowledgeBase,
  ...task,
  ...ticket
};