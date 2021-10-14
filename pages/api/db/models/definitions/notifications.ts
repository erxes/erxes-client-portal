import { Document, Schema } from 'mongoose';
import { NOTIFICATION_TYPES } from './constants';
import { field } from './utils';
import { INotificationModel } from '../Notifications';

export interface INotification {
  notifType?: string;
  title?: string;
  content?: string;
  link?: string;
  contentType?: string;
  contentTypeId?: string;
  receiver?: string;
  action?: string;
}

export interface INotificationDocument extends INotification, Document {
  _id: string;
  createdUser?: string;
  receiver: string;
  date: Date;
  isRead: boolean;
}

export const notificationSchema = new Schema<
  INotificationDocument,
  INotificationModel
>({
  notifType: field({
    type: String,
    enum: NOTIFICATION_TYPES.ALL,
    optional: true
  }),
  action: field({
    type: String,
    optional: true
  }),
  title: field({ type: String }),
  link: field({ type: String, optional: true }),
  content: field({ type: String, optional: true }),
  createdUser: field({ type: String, optional: true }),
  receiver: field({ type: String, index: true, optional: true }),
  contentType: field({ type: String, index: true, optional: true }),
  contentTypeId: field({ type: String, index: true, optional: true }),
  date: field({
    type: Date,
    default: Date.now
  }),
  isRead: field({
    type: Boolean,
    default: false
  })
});
