ARG BASE_IMAGE
FROM $BASE_IMAGE
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html/help