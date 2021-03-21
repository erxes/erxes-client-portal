FROM node:12.19-alpine
WORKDIR /erxes-client-portal/
RUN chown -R node:node /erxes-client-portal
COPY --chown=node:node . /erxes-client-portal
USER node
EXPOSE 3000
ENTRYPOINT [ "yarn", "start" ]
