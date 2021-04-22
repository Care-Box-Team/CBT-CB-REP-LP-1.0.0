import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />

          {/* Open Graph / Facebook  */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://olma.pe/" />
          <meta property="og:title" content="Olma" />
          <meta
            property="og:description"
            content="Los mejores productos de belleza."
          />
          <meta property="og:image" content="/logo-bg.png" />

          {/* Twitter  */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://olma.pe" />
          <meta property="twitter:title" content="Olma" />
          <meta
            property="twitter:description"
            content="Los mejores productos de belleza."
          />
          {/* <meta property="twitter:image" content="/logo-bg.png" /> */}
          <meta name="theme-color" content="#ff7733" />
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