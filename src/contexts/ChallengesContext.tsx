import { createContext, useContext, useState } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  activeChallenge: Challenge;
  leveUp(): void;
  startNewChallenge(): void;
  resetChallenge(): void;
  completeChallenge(): void;
}

const ChallangeContext = createContext({} as ChallengeContextData);

interface ChallengesProviderProps {
  children: React.ReactNode;
}

function ChallengesProvider({ children }: ChallengesProviderProps): JSX.Element {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(40);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function leveUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) return;

    const { amount } = activeChallenge as Challenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;

      leveUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallangeContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      leveUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
      completeChallenge,
    }}
    >
      {children}
    </ChallangeContext.Provider>
  );
}

function useChallenge(): ChallengeContextData {
  const context = useContext(ChallangeContext);

  return context;
}

export { ChallengesProvider, useChallenge };
