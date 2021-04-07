FROM node:12.19-alpine
WORKDIR /erxes-client-portal/
RUN chown -R node:node /erxes-client-portal
COPY --chown=node:node . /erxes-client-portal
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT [ "sh", "/usr/local/bin/docker-entrypoint.sh" ]