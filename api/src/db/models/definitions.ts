import { Document, Schema } from "mongoose";
import { field } from "./utils";

export interface ICustomer {
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

export interface ICustomerDocument extends ICustomer, Document {
  _id: string;
}

export const customerSchema = new Schema({
  _id: field({ pkey: true }),
  createdAt: field({
    type: Date,
    default: Date.now,
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
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/, 'Please fill a valid email address'],
    label: 'Email',
  }),
});