import { paginate } from 'erxes-api-utils';
import Customers from '../../../db/models/Customers';
import { IContext } from '../../types';

interface IListArgs {
  page?: number;
  perPage?: number;
  searchValue?: string;
  ids?: string[];
  email?: string;
}

const queryBuilder = async (params: IListArgs) => {
  const { searchValue, ids,  } = params;

  const selector: any = {};

  if (searchValue) {
    const fields = [
      { email: new RegExp(`.*${params.searchValue}.*`, 'i') },
      { 'firstName': new RegExp(`.*${params.searchValue}.*`, 'i') },
      { 'lastName': new RegExp(`.*${params.searchValue}.*`, 'i') },
    ];

    selector.$or = fields;
  }

  if (ids && ids.length > 0) {
    return { _id: { $in: ids } };
  }

  return selector;
};

const customerQueries = {
  async customers(_root, args: IListArgs) {
    const selector = await queryBuilder(args);

    return paginate(Customers.find(selector).sort({ firstName: 1 }), args);
  },

  customerDetail(_root, { _id }: { _id: string }) {
    return Customers.findOne({ _id });
  },

  currentCustomer(_root, _args, { customer }: IContext) {
    return customer ? Customers.findOne({ _id: customer._id }) : null;
  },
};

export default customerQueries;