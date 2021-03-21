FROM node:alpine
WORKDIR /client-portal
COPY yarn.lock package.json ./
RUN yarn install
RUN yarn build
CMD ["yarn", "start"]