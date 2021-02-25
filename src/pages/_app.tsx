import { AppProps } from 'next/app';
import { AppProvider } from '../contexts';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
