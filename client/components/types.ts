export type Config = {
  name?: string;
  description?: string;
  logo?: string;
  icon?: string;
  knowledgeBaseLabel?: string;
  knowledgeBaseTopicId?: string;
  ticketLabel?: string;
  taskLabel?: string;
  taskStageId?: string;
  ticketStageId?: string;
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
} 