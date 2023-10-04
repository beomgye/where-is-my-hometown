import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { Header } from "@/components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <Script
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d248939062099475f9c7ced600dbbbc6"
          />
          <Header />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
