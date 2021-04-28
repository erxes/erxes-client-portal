import * as express from 'express';
import { IUser } from '../../db/models/definitions';
import { ILoginParams } from '../../types';
import Users from '../../db/models/Users';
import { USER_LOGIN_TYPES } from '../../db/utils';
import { IContext } from '../../types';
import { sendGraphQLRequest } from '../../utils';
import { authCookieOptions } from '../utils';
import {
  clientPortalCreateCustomer,
  clientPortalCreateCompany
} from './graphql/mutations';

type AddParams = {
  configId: string;
} & IUser;

const login = async (
  args: ILoginParams,
  res: express.Response,
  secure: boolean
) => {
  const response = await Users.login(args);

  const { token } = response;

  res.cookie('client-auth-token', token, authCookieOptions(secure));

  return 'loggedIn';
};

const userMutations = {
  async userAdd(
    _root,
    {
      configId,
      email,
      type,
      password,
      firstName,
      lastName,
      phone,
      companyName,
      companyRegistrationNumber
    }: AddParams
  ) {
    const tEmail = (email || '').toLowerCase().trim();

    const doc: IUser = {
      email: tEmail,
      password: (password || '').trim(),
      firstName,
      lastName,
      phone,
      companyName,
      companyRegistrationNumber,
      type
    };

    await Users.createUser(doc);

    if (type === USER_LOGIN_TYPES.COMPANY) {
      await sendGraphQLRequest({
        query: clientPortalCreateCompany,
        name: 'createCompany',
        variables: {
          configId,
          email: tEmail,
          companyName
        }
      });
    } else {
      await sendGraphQLRequest({
        query: clientPortalCreateCustomer,
        name: 'createCustomer',
        variables: {
          configId,
          email: tEmail,
          firstName,
          lastName
        }
      });
    }

    return 'success';
  },

  /*
   * Login
   */
  async login(_root, args: ILoginParams, { res, requestInfo }: IContext) {
    return login(args, res, requestInfo.secure);
  },

  /*
   * Logout
   */
  async logout(_root, _args, { res }: IContext) {
    res.cookie('client-auth-token', '1', { maxAge: 0 });

    return 'loggedout';
  },

  /*
   * Change user password
   */
  userChangePassword(
    _root,
    args: { currentPassword: string; newPassword: string },
    { user }: IContext
  ) {
    return Users.changePassword({ _id: user._id, ...args });
  },

  /*
   * Edit user profile
   */
  async userEdit(_root, args: IUser, { user }: IContext) {
    return Users.editProfile(user._id, args);
  }
};

export default userMutations;
