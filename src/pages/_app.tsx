import { ChallengesProvider } from '../contexts/ChallengesContext';

import '../styles/global.css';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
