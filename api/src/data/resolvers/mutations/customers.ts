import Customers from "../../../db/models/Customers";
import { IContext } from "../../types";
import { authCookieOptions } from "../../utilts";

interface ILogin {
  email: string;
  password: string;
}

const customerMutations = {
  async login(_root, args: ILogin, { res, requestInfo }: IContext) {
    const response = await Customers.login(args);

    const { token } = response;

    res.cookie('auth-token', token, authCookieOptions(requestInfo.secure));

    return 'loggedIn';
  },

  async logout(_root, _args, { res }) {
    res.clearCookie('auth-token');

    return 'loggedout';
  },

  async customerAdd(_root, args: { email: string, password: string, firstName: string, lastName: string}) {
    const exisitingCustomer = await Customers.findOne({ email: args.email }).lean();

    if (exisitingCustomer) {
      throw new Error(`${args.email} already registered`);
    }

    return Customers.createCustomer(args);
  },

  async customerEdit(
    _root,
    {
      email,
      password,
      firstName,
      lastName,
    }: {
      email: string;
      password: string;
      firstName?: string;
      lastName?: string;
    },
    { customer }: IContext,
  ) {
    const customerOnDb = await Customers.getCustomer(customer._id);

    const valid = await Customers.comparePassword(password, customerOnDb.password);

    if (!password || !valid) {
      // bad password
      throw new Error('Invalid password. Try again');
    }

    return Customers.editProfile(customer._id, { email, lastName, firstName });
  },

  resetPassword(_root, args: { token: string; newPassword: string }) {
    return Customers.resetPassword(args);
  },

  customerChangePassword(_root, args: { currentPassword: string; newPassword: string }, { customer }: IContext) {
    return Customers.changePassword({ _id: customer._id, ...args });
  },

  // TODO: Forgot password
};

export default customerMutations;