import Users from '../../db/models/Users';
import { IUser } from '../../db/models/definitions';

interface ILogin {
  email: string;
  password: string;
  deviceToken?: string;
}

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
  }
};

export default userMutations;
