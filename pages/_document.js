import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import CardColumn from '../components/CardColumn';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head />
        <CardColumn></CardColumn>
        <body
          className={`antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
