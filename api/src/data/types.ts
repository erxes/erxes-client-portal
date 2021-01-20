import * as express from 'express';
import { ICustomerDocument } from '../db/models/definitions';

export interface IContext {
  res: express.Response;
  requestInfo: any;
  customer: ICustomerDocument;
}