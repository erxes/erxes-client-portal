#!/bin/sh

ENV="$(cat <<EOF
  window.env = {
      REACT_APP_MAIN_API_DOMAIN: "$REACT_APP_MAIN_API_DOMAIN",
      REACT_APP_API_DOMAIN: "$REACT_APP_API_DOMAIN",
      REACT_APP_CLIENT_PORTAL_CONFIG_ID: "$REACT_APP_CLIENT_PORTAL_CONFIG_ID",
  }
EOF
)"

echo $ENV > /erxes-client-portal/static/js/env.js

exec "$@"