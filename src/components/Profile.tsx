import { useChallenge } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(): JSX.Element {
  const { level } = useChallenge();

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/45343619?s=460&u=1929279b8eb8dbe2434c20e7ad7e239674b4cc17&v=4" alt="Avatar" />

      <div>
        <strong data-testid="name">Héliton Oliveira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level
          {' '}
          {level}

        </p>
      </div>
    </div>
  );
}
