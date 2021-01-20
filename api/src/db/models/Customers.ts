import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { Model, model } from 'mongoose';
import * as sha256 from 'sha256';
import { customerSchema, ICustomer, ICustomerDocument } from "./definitions";

const SALT_WORK_FACTOR = 10;

interface IEditProfile {
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface ICustomerModel extends Model<ICustomerDocument> {
  getCustomer(_id: string): Promise<ICustomerDocument>;
  checkPassword(password: string): void;
  getSecret(): string;
  generateToken(): { token: string; expires: Date };
  createCustomer(doc: ICustomer): Promise<ICustomerDocument>;
  editProfile(_id: string, doc: IEditProfile): Promise<ICustomerDocument>;
  generatePassword(password: string): Promise<string>;
  comparePassword(password: string, customerPassword: string): boolean;
  resetPassword({ token, newPassword }: { token: string; newPassword: string }): Promise<ICustomerDocument>;
  changePassword({
    _id,
    currentPassword,
    newPassword,
  }: {
    _id: string;
    currentPassword: string;
    newPassword: string;
  }): Promise<ICustomerDocument>;
  forgotPassword(email: string): string;
  createTokens(_customer: ICustomerDocument, secret: string): string[];
  refreshTokens(refreshToken: string): { token: string; refreshToken: string; customer: ICustomerDocument };
  login({
    email,
    password,
  }: {
    email: string;
    password?: string;
  }): { token: string; refreshToken: string };
}

export const loadClass = () => {
  class Customer {
    public static getSecret() {
      return process.env.JWT_TOKEN_SECRET || '';
    }

    public static generatePassword(password: string) {
      const hashPassword = sha256(password);

      return bcrypt.hash(hashPassword, SALT_WORK_FACTOR);
    }

    public static comparePassword(password: string, customerPassword: string) {
      const hashPassword = sha256(password);

      return bcrypt.compare(hashPassword, customerPassword);
    }

    public static async generateToken() {
      const buffer = await crypto.randomBytes(20);
      const token = buffer.toString('hex');

      return {
        token,
        expires: Date.now() + 86400000,
      };
    }

    public static async getCustomer(_id: string) {
      const customer = await Customers.findOne({ _id });

      if (!customer) {
        throw new Error('Customer not found');
      }

      return customer;
    }

    public static checkPassword(password: string) {
      if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        throw new Error(
          'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters',
        );
      }
    }

    public static async createCustomer({ firstName, lastName, email, password }: ICustomer) {
      // empty string password validation
      if (password === '') {
        throw new Error('Password can not be empty');
      }

      this.checkPassword(password);

      const customer = await Customers.create({
        firstName,
        lastName,
        email,
        // hash password
        password: await this.generatePassword(password),
      });

      return customer._id;
    }

    public static async editProfile(_id: string, { firstName, lastName, email }: IEditProfile) {
      // Checking duplicated email
      const exisitingCustomer = await Customers.findOne({ email }).lean();

      if (exisitingCustomer) {
        throw new Error('Email duplicated');
      }

      await Customers.updateOne({ _id }, { $set: { firstName, lastName, email } });

      return Customers.findOne({ _id });
    }

    public static async resetPassword({ token, newPassword }: { token: string; newPassword: string }) {
      const customer = await Customers.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: {
          $gt: Date.now(),
        },
      });

      if (!customer) {
        throw new Error('Password reset token is invalid or has expired.');
      }

      if (!newPassword) {
        throw new Error('Password is required.');
      }

      this.checkPassword(newPassword);

      // set new password
      await Customers.findByIdAndUpdate(
        { _id: customer._id },
        {
          password: await this.generatePassword(newPassword),
          resetPasswordToken: undefined,
          resetPasswordExpires: undefined,
        },
      );

      return Customers.findOne({ _id: customer._id });
    }

    public static async changePassword({
      _id,
      currentPassword,
      newPassword,
    }: {
      _id: string;
      currentPassword: string;
      newPassword: string;
    }) {
      // Password can not be empty string
      if (newPassword === '') {
        throw new Error('Password can not be empty');
      }

      this.checkPassword(newPassword);

      const customer = await Customers.getCustomer(_id);

      // check current password ============
      const valid = await this.comparePassword(currentPassword, customer.password);

      if (!valid) {
        throw new Error('Incorrect current password');
      }

      // set new password
      await Customers.findByIdAndUpdate(
        { _id: customer._id },
        {
          password: await this.generatePassword(newPassword),
        },
      );

      return Customers.findOne({ _id: customer._id });
    }

    public static async forgotPassword(email: string) {
      const customer = await Customers.findOne({ email });

      if (!customer) {
        throw new Error('Invalid email');
      }

      // create the random token
      const buffer = await crypto.randomBytes(20);
      const token = buffer.toString('hex');

      // save token & expiration date
      await Customers.findByIdAndUpdate(
        { _id: customer._id },
        {
          resetPasswordToken: token,
          resetPasswordExpires: Date.now() + 86400000,
        },
      );

      return token;
    }

    public static async createTokens(_customer: ICustomerDocument, secret: string) {
      const customer = {
        _id: _customer._id,
        email: _customer.email,
        firstName: _customer.firstName,
        lastName: _customer.lastName,
      };

      const createToken = await jwt.sign({ customer }, secret, { expiresIn: '1d' });

      const createRefreshToken = await jwt.sign({ customer }, secret, {
        expiresIn: '7d',
      });

      return [createToken, createRefreshToken];
    }

    public static async refreshTokens(refreshToken: string) {
      let _id = '';

      try {
        // validate refresh token
        const { customer } = jwt.verify(refreshToken, this.getSecret());

        _id = customer._id;
        // if refresh token is expired then force to login
      } catch (e) {
        return {};
      }

      const dbCustomer = await Customers.getCustomer(_id);

      // recreate tokens
      const [newToken, newRefreshToken] = await this.createTokens(dbCustomer, this.getSecret());

      return {
        token: newToken,
        refreshToken: newRefreshToken,
        customer: dbCustomer,
      };
    }

    public static async login({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) {
      const customer = await Customers.findOne({
         email: { $regex: new RegExp(`^${email}$`, 'i') },
      });

      if (!customer || !customer.password) {
        throw new Error('Invalid login');
      }

      const valid = await this.comparePassword(password, customer.password);

      if (!valid) {
        // bad password
        throw new Error('Invalid login');
      }

      // create tokens
      const [token, refreshToken] = await this.createTokens(customer, this.getSecret());

      return {
        token,
        refreshToken,
      };
    }
  }

  customerSchema.loadClass(Customer);

  return customerSchema;
};

loadClass();

// tslint:disable-next-line
const Customers = model<ICustomerDocument, ICustomerModel>('customers', customerSchema);

export default Customers;