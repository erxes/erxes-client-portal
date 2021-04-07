FROM node:12.16
RUN apk add --no-cache alpine-sdk && \
    cd /tmp && curl -s -LO https://github.com/jpmens/jo/releases/download/1.3/jo-1.3.tar.gz && \
    tar xzf jo-1.3.tar.gz && \
    cd jo-1.3 && \
    ./configure && \
    make check && \
    make install

WORKDIR /client-portal/
COPY --from=0 /usr/local/bin/jo /usr/local/bin/jo
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh && \
    chmod +x /usr/local/bin/jo
COPY . /client-portal
CMD ["yarn", "start"]
# ENTRYPOINT [ "sh", "/usr/local/bin/docker-entrypoint.sh" ]