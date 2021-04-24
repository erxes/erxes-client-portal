import { Document, Schema } from 'mongoose';
import { IUserModel } from './Users';
import { ILogModel } from './Logs';
import { field } from './utils';

export interface IUser {
  createdAt?: Date;
  password: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: number;
  registrationToken?: string;
  registrationTokenExpires?: Date;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export interface IUserDocument extends IUser, Document {
  _id: string;
}

export const userSchema = new Schema<IUserDocument, IUserModel>({
  createdAt: field({
    type: Date,
    default: Date.now
  }),
  firstName: field({ type: String }),
  phone: field({ type: String }),
  lastName: field({ type: String, optional: true }),
  password: field({ type: String }),
  resetPasswordToken: field({ type: String, optional: true }),
  registrationToken: field({ type: String, optional: true }),
  registrationTokenExpires: field({ type: Date, optional: true }),
  resetPasswordExpires: field({ type: Date, optional: true }),
  email: field({
    type: String,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
      'Please fill a valid email address'
    ],
    label: 'Email'
  })
});

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
