import React from "react";
import Head from "next/head";

function Header({ title, image = "/static/favicon.png" }) {
  let defaultUrl = "";

  if (process.browser) {
    defaultUrl = window.location.href;
  }

  return (
    <>
      <Head>
        <title>{title || "erxes Experience Platform"}</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="erxes, gerege" />
        <meta name="description" content="Here is website description" />
        <meta name="author" content="Here is website author url" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />

        <meta
          property="og:title"
          content={title || "erxes Experience Platform"}
        />
        <meta property="og:description" content="Here is website description" />
        <meta property="og:url" content={defaultUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={image || "Here is website demo image"}
        />
        <meta property="og:site_name" content="erxes Experience Platform" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={title || "erxes Experience Platform"}
        />
        <meta name="twitter:url" content={defaultUrl} />
        <meta
          name="twitter:description"
          content="Here is website description"
        />
        <meta
          name="twitter:image"
          content={image || "Here is website demo image"}
        />
        <meta name="twitter:site" content="@your-site-twitter-name" />
        <meta name="twitter:creator" content="@your-site-twitter-name" />
        <meta name="twitter:image:alt" content="erxes Experience Platform" />

        <link rel="shortcut icon" id="favicon" href="/favicon.ico"></link>
      </Head>
    </>
  );
}

export default Header;
