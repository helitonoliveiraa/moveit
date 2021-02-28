import {
  createContext, useContext, useEffect, useState,
} from 'react';
import { useChallenge } from './ChallengesContext';

interface CountdownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  startCountdown(): void;
  resetCountdown(): void;
}

interface CountdowContextProps {
  children: React.ReactNode;
}

const CountdownContext = createContext({} as CountdownContextData);

let countdownTimeout: NodeJS.Timeout;

function CountdownProvider({ children }: CountdowContextProps): JSX.Element {
  const { startNewChallenge } = useChallenge();

  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
    setHasFinished(false);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time, startNewChallenge]);

  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      isActive,
      hasFinished,
      startCountdown,
      resetCountdown,
    }}
    >
      {children}
    </CountdownContext.Provider>
  );
}

function useCoutdown(): CountdownContextData {
  const context = useContext(CountdownContext);

  return context;
}

export { CountdownProvider, useCoutdown };
