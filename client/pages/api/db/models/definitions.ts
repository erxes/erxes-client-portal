import { Document, Schema } from 'mongoose';
import { IUserModel } from './Users';
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
  lastName: field({ type: String }),
  password: field({ type: String }),
  resetPasswordToken: field({ type: String }),
  registrationToken: field({ type: String }),
  registrationTokenExpires: field({ type: Date }),
  resetPasswordExpires: field({ type: Date }),
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
