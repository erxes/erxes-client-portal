import * as express from 'express';
import { IUser } from '../../db/models/definitions';
import Users from '../../db/models/Users';
import { IContext } from '../../types';
import { sendGraphQLRequest } from '../../utils';
import { authCookieOptions } from '../utils';

interface ILogin {
  email: string;
  password: string;
  deviceToken?: string;
}

const clientPortalCreateCustomer = `
  mutation createCustomer(
    $configId: String!,
    $firstName: String!,
    $lastName: String
    $email: String!
  ) {
    clientPortalCreateCustomer(
      configId: $configId,
      firstName: $firstName,
      lastName: $lastName
      email: $email
    ) {
      _id
    }
  }
`;

const login = async (args: ILogin, res: express.Response, secure: boolean) => {
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
      password,
      firstName,
      lastName
    }: {
      configId: string;
      email: string;
      password: string;
      firstName: string;
      lastName?: string;
    }
  ) {
    const doc: IUser = {
      email: (email || '').toLowerCase().trim(),
      password: (password || '').trim(),
      firstName,
      lastName
    };

    await Users.createUser(doc);

    await sendGraphQLRequest({
      query: clientPortalCreateCustomer,
      name: 'createCustomer',
      variables: {
        configId,
        email,
        firstName,
        lastName
      }
    });

    return 'success';
  },

  /*
   * Login
   */
  async login(_root, args: ILogin, { res, requestInfo }: IContext) {
    return login(args, res, requestInfo.secure);
  },

  /*
   * Logout
   */
  async logout(_root, _args, { res }: IContext) {
    res.cookie('client-auth-token', '1', { maxAge: 0 });

    return 'loggedout';
  }
};

export default userMutations;