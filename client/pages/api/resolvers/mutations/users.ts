import Users from '../../db/models/Users';
import { IUser } from '../../db/models/definitions';
import * as express from 'express';
import { authCookieOptions } from '../utils';
import { IContext } from '../../types';

interface ILogin {
  email: string;
  password: string;
  deviceToken?: string;
}

const login = async (args: ILogin, res: express.Response, secure: boolean) => {
  const response = await Users.login(args);

  const { token } = response;

  res.cookie('auth-token', token, authCookieOptions(secure));

  return 'loggedIn';
};

const userMutations = {
  async userAdd(
    _root,
    {
      email,
      password,
      firstName,
      lastName
    }: {
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

    const user = await Users.createUser(doc);

    return 'success';
  },

  /*
   * Login
   */
  async login(_root, args: ILogin, { res, requestInfo }: IContext) {
    return login(args, res, requestInfo.secure);
  }
};

export default userMutations;
