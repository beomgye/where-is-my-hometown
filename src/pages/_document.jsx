import Document, { Html, Head, Main, NextScript } from 'next/document';

import Script from 'next/script';
import { Header } from '@/components';

const API = process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY;
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${API}&libraries=services,clusterer&autoload=false`;
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component
      });

    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
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
