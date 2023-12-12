import * as React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';

// ----------------------------------------------------------------------

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8'/>
          <link rel='preconnect' href='https://fonts.googleapis.com'/>
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <meta
            name='description'
            content='Generate unique and creative images from text with OpenArt, the powerful AI image creation tool. Simply type in your desired image and OpenArt will use artificial intelligence to generate it for you. Perfect for artists, designers, and anyone who wants to create stunning visuals without any design experience.'
          />
        </Head>

        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}
