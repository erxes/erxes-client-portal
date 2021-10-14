import { Document, Schema } from 'mongoose';
import { ILogModel } from '../Logs';
import { field } from './utils';

export interface ILog {
  type: string;
  typeId: string;
  text: string;
  description?: string;
}

export interface ILogDocument extends ILog, Document {
  _id: string;
}

export const logSchema = new Schema<ILogDocument, ILogModel>({
  type: field({ type: String }),
  typeId: field({ type: String }),
  description: field({ type: String, optional: true }),
  text: field({ type: String }),
  createdAt: field({
    type: Date,
    default: Date.now
  })
});
