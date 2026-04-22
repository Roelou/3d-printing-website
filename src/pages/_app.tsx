import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Any global setup can be done here
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;