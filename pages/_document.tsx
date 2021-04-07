import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:site_name" content="Erxes client portal" />
          <meta
            name="keywords"
            content="Erxes client portal erxes.io erxes.org mongolia"
          />

          <link href="/static/images/favicon.png" rel="shortcut icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&amp;display=swap"
            rel="stylesheet"
          />

          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/static/js/env.js" />
          <script src="/static/js/main.js" />
        </body>
      </Html>
    );
  }
}
