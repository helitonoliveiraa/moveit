import { useEffect, useState } from 'react';
import styles from '../styles/components/Countdown.module.css';

export function Countdow() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function toggleCoutdown() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [isActive, time]);

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

      {isActive ? (
        <button 
        type="button" 
        className={`${styles.countdownButton} ${styles.countdownButtonActive}`} 
        onClick={toggleCoutdown}
      >
        Abandonar ciclo
        <img src="icons/close.svg" alt="Close"/>
      </button>
      ) : (
      <button 
      type="button" 
      className={styles.countdownButton} 
      onClick={toggleCoutdown}
      >
      Iniciar um ciclo
      <img src="icons/play-arrow.svg" alt="Play"/>
      </button>
      )}
    </div>
  );
}