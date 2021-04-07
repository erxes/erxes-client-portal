FROM alpine:3.11
RUN apk add --no-cache alpine-sdk && \
    cd /tmp && curl -s -LO https://github.com/jpmens/jo/releases/download/1.3/jo-1.3.tar.gz && \
    tar xzf jo-1.3.tar.gz && \
    cd jo-1.3 && \
    ./configure && \
    make check && \
    make install

# nginx current stable 1.18
FROM nginx:1.18-alpine
WORKDIR /client-portal/
COPY --from=0 /usr/local/bin/jo /usr/local/bin/jo
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh && \
    chmod +x /usr/local/bin/jo
COPY . /client-portal
RUN ls /client-portal
# ENTRYPOINT [ "sh", "/usr/local/bin/docker-entrypoint.sh" ]
CMD ["yarn", "start"]