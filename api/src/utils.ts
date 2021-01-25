import * as dotenv from "dotenv";
import * as request from "request";

// load env
dotenv.config();

const { MAIN_API_DOMAIN } = process.env;

export const sendGraphQLRequest = ({
  query,
  variables,
  name,
}: {
  name: string;
  query: string;
  variables?: { [key: string]: string };
}) => {
  return new Promise((resolve, reject) => {
    request(
      {
        url: `${MAIN_API_DOMAIN}/graphql`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
      },
      (error, _response, body) => {
        if (error) {
          return reject(error);
        }

        if (!body) {
          return reject(`Could not fetch ${name}`);
        }

        const response = JSON.parse(body || "{}");

        const { data = {} } = response || {};

        return resolve(data[name]);
      }
    );
  });
};
