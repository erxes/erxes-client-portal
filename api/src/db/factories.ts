import * as faker from 'faker';
import * as Random from 'meteor-random';
import Customers from './models/Customers';

interface ICustomerFactoryInput {
  firstName?: string;
  lastName?: string;
  registrationToken?: string;
  registrationTokenExpires?: string;
  email?: string;
  password?: string;
};

export const getUniqueValue = async (collection: any, fieldName: string = 'code', defaultValue?: string) => {
  const getRandomValue = (type: string) => (type === 'email' ? faker.internet.email() : Random.id());

  let uniqueValue = defaultValue || getRandomValue(fieldName);

  let duplicated = await collection.findOne({ [fieldName]: uniqueValue });

  while (duplicated) {
    uniqueValue = getRandomValue(fieldName);

    duplicated = await collection.findOne({ [fieldName]: uniqueValue });
  }

  return uniqueValue;
};

export const customerFactory = async (params: ICustomerFactoryInput = {}) => {
  const customer = new Customers({
    firstName: params.firstName || faker.internet.word(),
    lastName: params.lastName || faker.internet.word(),
    registrationToken: params.registrationToken,
    registrationTokenExpires: params.registrationTokenExpires,
    email: await getUniqueValue(Customers, 'email', params.email),
    password: params.password || '$2a$10$qfBFBmWmUjeRcR.nBBfgDO/BEbxgoai5qQhyjsrDUMiZC6dG7sg1q',
  });

  return customer.save();
};