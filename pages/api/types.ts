import * as express from 'express';
import { IUserDocument } from './db/models/definitions';

export interface IContext {
  res: express.Response;
  requestInfo: any;
  user: IUserDocument;
}
