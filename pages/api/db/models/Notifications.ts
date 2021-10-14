import mongoose, { Model, model } from 'mongoose';
import {
  INotification,
  INotificationDocument,
  notificationSchema
} from './definitions/notifications';
import { IUserDocument } from './definitions/users';

export interface INotificationModel extends Model<INotificationDocument> {
  markAsRead(ids: string[], userId?: string): void;
  createNotification(
    doc: INotification,
    createdUser?: IUserDocument | string
  ): Promise<INotificationDocument>;
  updateNotification(
    _id: string,
    doc: INotification
  ): Promise<INotificationDocument>;
  checkIfRead(userId: string, contentTypeId: string): Promise<boolean>;
  removeNotification(_id: string): void;
}

export const loadNotificationClass = () => {
  class Notification {
    /**
     * Marks notifications as read
     */
    public static markAsRead(ids: string[], userId: string) {
      let selector: any = { receiver: userId };

      if (ids && ids.length > 0) {
        selector = { _id: { $in: ids } };
      }

      return Notifications.updateMany(
        selector,
        { $set: { isRead: true } },
        { multi: true }
      );
    }

    /**
     * Check if user has read notification
     */
    public static async checkIfRead(userId, contentTypeId) {
      const notification = await Notifications.findOne({
        isRead: false,
        receiver: userId,
        contentTypeId
      });

      return notification ? false : true;
    }

    /**
     * Create a notification
     */
    public static async createNotification(
      doc: INotification,
      createdUserId: string
    ) {
      return Notifications.create({ ...doc, createdUser: createdUserId });
    }

    /**
     * Update a notification
     */
    public static async updateNotification(_id: string, doc: INotification) {
      await Notifications.updateOne({ _id }, doc);

      return Notifications.findOne({ _id });
    }

    /**
     * Remove a notification
     */
    public static removeNotification(_id: string) {
      return Notifications.deleteOne({ _id });
    }
  }

  notificationSchema.loadClass(Notification);

  return notificationSchema;
};

loadNotificationClass();

// tslint:disable-next-line
delete mongoose.connection.models['notifications'];

// tslint:disable-next-line
const Notifications = model<INotificationDocument, INotificationModel>(
  'notifications',
  notificationSchema
);

export default Notifications;
