export type Store = {
  currentUser: ICustomer;
  topic: Topic;
  config: Config;
};

export type Ticket = {
  stageId: string;
  subject: string;
  description?: string;
  requestor: string;
  priority: string;
};

export type Config = {
  _id?: string;
  name?: string;
  description?: string;
  logo?: string;
  icon?: string;
  url?: string;
  knowledgeBaseLabel?: string;
  knowledgeBaseTopicId?: string;
  taskPublicPipelineId?: string;
  ticketLabel?: string;
  taskLabel?: string;
  taskStageId?: string;
  ticketStageId?: string;

  styles?: {
    bodyColor?: string;
    headerColor?: string;
    footerColor?: string;
    helpColor?: string;
    backgroundColor?: string;
    activeTabColor?: string;
    baseColor?: string;
    headingColor?: string;
    linkColor?: string;
    linkHoverColor?: string;
    baseFont?: string;
    headingFont?: string;
    dividerColor?: string;
    primaryBtnColor?: string;
    secondaryBtnColor?: string;
  };

  advanced?: {
    authAllow?: string;
    permission?: string;
    viewTicket?: string;
  };
};

interface ICommonFields {
  createdBy: string;
  createdDate: Date;
  modifiedBy: string;
  modifiedDate: Date;
}

export interface IKbCategory extends ICommonFields {
  _id: string;
  title: string;
  description: string;
  articleIds: string[];
  icon: string;

  authors: IUser[];
  articles: IKbArticle[];
  numOfArticles: number;
}

export interface IUserDetails {
  avatar: string;
  fullName: string;
  shortName: string;
  position: string;
  description: string;
}

export interface IUser {
  _id: string;
  details?: IUserDetails;
}

export interface ICustomer {
  _id: string;
  firstName: string;
  lastName?: string;
  email: string;
}

export interface IKbArticle extends ICommonFields {
  _id: string;
  title: string;
  summary: string;
  content: string;
  status: string;
  reactionChoices?: string[];
  createdUser: IUser;
}

export type Topic = {
  _id: string;
  title: string;
  description: string;
  brandId: string;
  categoryIds: string[];
  color: string;
  backgroundImage: string;
  languageCode?: string;

  categories: IKbCategory[];
  createdBy: string;
  createdDate: Date;
  modifiedBy: string;
  modifiedDate: Date;
};
