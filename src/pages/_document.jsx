import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import Script from 'next/script';
import React from 'react';
import { Header } from '@/components';

const API = process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY;
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${API}&libraries=services,clusterer&autoload=false`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), sheet.getStyleElement()]
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <Header />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
