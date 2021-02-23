import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  return (
    <header className={styles.exprerienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '60%' }} />

        <span className={styles.currentExperience} style={{ left: '60%' }}>400 xp</span>
      </div>
      <span>600 xp</span>
    </header>
  );
}