import { IUserDocument } from "./db/models/definitions";

export interface IContext {
  user: IUserDocument;
}