import { useChallenge } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal(): JSX.Element {
  const { level, closeLevelUpModal } = useChallenge();

  return (
    <div className={styles.overlay}>
      <div className={styles.levelUpModalContainer}>
        <button
          type="button"
          className={styles.closeModal}
          onClick={closeLevelUpModal}
        >
          <img src="icons/close.svg" alt="Fechar modal" />
        </button>
        <header>{level}</header>

        <strong>Parabéns</strong>

        <p>Você alcançou um novo level.</p>

        {/* <button
          type="button"

        >
          Compartilhar no twitter
          <img src="icons/twitter.svg" alt="Fechar modal" />
        </button> */}
      </div>
    </div>
  );
}
