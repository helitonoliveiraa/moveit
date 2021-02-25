import { useCoutdown } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdow(): JSX.Element {
  const {
    minutes, seconds, isActive, hasFinished, startCountdown, resetCountdown,
  } = useCoutdown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          type="button"
          className={styles.countdownButton}
          onClick={startCountdown}
        >
          Ciclo encerrado
          <img src="icons/check_circle.svg" alt="Check" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <img src="icons/close.svg" alt="Close" />
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img src="icons/play-arrow.svg" alt="Play" />
            </button>
          )}
        </>
      )}

    </div>
  );
}
