import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  
    return (
      <Html lang="en">
        <Head>
          {/* Favicons */}

          {/* Favicons */}
            <link href="/favicon.ico" rel="shortcut icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}
