import { Document, Schema } from 'mongoose';
import { IUserModel } from './Users';
import { ILogModel } from './Logs';
import { field } from './utils';

export interface IUser {
  createdAt?: Date;
  password: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: number;
  registrationToken?: string;
  registrationTokenExpires?: Date;
  firstName?: string;
  lastName?: string;
  phone?: string;
  type?: string;
  companyName?: string;
  companyRegistrationNumber?: number;
}

export interface IUserDocument extends IUser, Document {
  _id: string;
}

export const userSchema = new Schema<IUserDocument, IUserModel>({
  type: field({
    type: String,
    enum: ['customer', 'company'],
    default: 'customer'
  }),
  createdAt: field({
    type: Date,
    default: Date.now
  }),
  email: field({
    type: String,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
      'Please fill a valid email address'
    ],
    label: 'Email'
  }),
  password: field({ type: String }),

  firstName: field({ type: String, optional: true }),
  phone: field({ type: String, optional: true }),
  lastName: field({ type: String, optional: true }),
  resetPasswordToken: field({ type: String, optional: true }),
  registrationToken: field({ type: String, optional: true }),
  registrationTokenExpires: field({ type: Date, optional: true }),
  resetPasswordExpires: field({ type: Date, optional: true }),
  companyName: field({ type: String, optional: true }),
  companyRegistrationNumber: field({ type: Number, optional: true })
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
