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
          <meta property="og:url" content="https://www.carebox.casa/" />
          <meta property="og:title" content="Olma" />
          <meta
            property="og:description"
            content="Productos de aseos personal"
          />
          <meta property="og:image" content="/logo-bg.png" />

          {/* Twitter  */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.carebox.casa/" />
          <meta property="twitter:title" content="Olma" />
          <meta
            property="twitter:description"
            content="Productos de aseos personal"
          />
          <meta name="theme-color" content="#FF144D" />
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