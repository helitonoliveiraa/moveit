import { useChallenge } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(): JSX.Element {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenge();

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
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />

            <strong>Exercite-se</strong>

            <p>
              {activeChallenge.description}

            </p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={completeChallenge}
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
