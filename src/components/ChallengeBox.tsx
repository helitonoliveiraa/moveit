import { useChallenge } from '../contexts/ChallengesContext';
import { useCoutdown } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(): JSX.Element {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenge();
  const { resetCountdown } = useCoutdown();

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>
            Ganhe
            {' '}
            {activeChallenge.amount}
            {' '}
            xp
          </header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Type" />

            <strong>Exercite-se</strong>

            <p>
              {activeChallenge.description}

            </p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>

            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
              data-testid="batata"
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <p>
            Inicie um ciclo
            <br />
            {' '}
            para receber desafios
          </p>

          <img src="icons/level-up.svg" alt="Level up" />

          <span>
            Avance de level completando
            <br />
            {' '}
            os desafios.
          </span>
        </div>
      )}
    </div>
  );
}
