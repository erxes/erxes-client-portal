import { Document, Schema } from 'mongoose';
import { IUserModel } from '../Users';
import { field } from './utils';
import { USER_LOGIN_TYPES } from '../../utils';

export interface IUser {
  createdAt?: Date;
  password?: string;
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
  deviceTokens?: string[];
}

export interface IUserDocument extends IUser, Document {
  _id: string;
}

export const userSchema = new Schema<IUserDocument, IUserModel>({
  type: field({
    type: String,
    enum: USER_LOGIN_TYPES.ALL,
    default: USER_LOGIN_TYPES.CUSTOMER
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
  companyRegistrationNumber: field({ type: Number, optional: true }),
  erxesCustomerId: field({ type: String, optional: true }),
  erxesCompanyId: field({ type: String, optional: true }),
  verificationCode: field({ type: String, optional: true }),
  verificationCodeExpires: field({ type: Date, optional: true }),
  deviceTokens: field({
    type: [String],
    default: [],
    label: 'Device tokens',
    optional: true
  })
});
