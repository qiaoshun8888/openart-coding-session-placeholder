import Head from 'next/head';
import React from 'react';

// react-query
import {
  queryClient,
  QueryClientProvider,
  SnackbarUtilsConfigurator,
} from 'lib/utils/react-query';

// ----------------------------------------------------------------------

export default function MyApp(props) {
  const {
    Component,
    pageProps: { session, layoutProps, ...pageProps },
  } = props;
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        {/* Meta tags */}
        <meta
          name='title'
          content='OpenArt - AI image generator that elevates and realizes your creative vision'
          key='title'
        />
        <meta name='description' content='' key='description'/>
        <meta
          name='keywords'
          content='AI Art Generator,Anime AI generator,AI Avatar Generator,AI Generated Art,AI Generated gaming assets,OpenArt,DALL·E 2,Stable Diffusion,Midjourney,dall e,scenario gg,scenario ai,from image,Dreambooth,training'
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <SnackbarUtilsConfigurator/>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
