import * as request from 'request';

type Params = {
  name: string;
  query: string;
  variables?: { [key: string]: string };
};

export const sendGraphQLRequest = ({ query, variables, name }: Params) => {
  const { REACT_APP_MAIN_API_DOMAIN } = process.env;

  return new Promise((resolve, reject) => {
    request(
      {
        url: `${REACT_APP_MAIN_API_DOMAIN}/graphql`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables })
      },
      (error, _response, body) => {
        if (error) {
          return reject(error);
        }

        if (!body) {
          return reject(`Could not fetch ${name}`);
        }

        const response = JSON.parse(body || '{}');

        const { errors, data = {} } = response || {};

        if (errors) {
          if (errors.length > 0) {
            return reject(errors[0].message);
          }

          return reject(errors);
        }

        return resolve(data[name]);
      }
    );
  });
};
