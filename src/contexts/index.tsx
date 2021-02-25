import { ChallengesProvider } from './ChallengesContext';
import { CountdownProvider } from './CountdownContext';

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps): JSX.Element {
  return (
    <ChallengesProvider>
      <CountdownProvider>
        {children}
      </CountdownProvider>
    </ChallengesProvider>
  );
}
