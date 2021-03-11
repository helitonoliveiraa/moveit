import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import styles from '../styles/pages/SignIn.module.css';

export function SignIn(): JSX.Element {
  const [username, setUsername] = useState('');

  console.log(username);

  return (
    <div className={styles.container}>
      <section className={styles.background} />

      <section className={styles.content}>
        <main>
          <img src="logo.svg" alt="Logo" />

          <strong>Bem-vindo</strong>

          <div>
            <FaGithub size={40} />

            <p>
              Faça login com seu Github
              para começar
            </p>
          </div>

          <section>
            <input
              type="text"
              placeholder="Digite seu username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {username ? (
              <button type="button" className={`${styles.loginButton} ${styles.active}`}>
                <FiArrowRight size={24} />
              </button>
            ) : (
              <button type="button" className={styles.loginButton}>
                <FiArrowRight size={24} />
              </button>
            )}
          </section>
        </main>
      </section>
    </div>
  );
}
