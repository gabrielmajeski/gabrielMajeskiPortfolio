import React from 'react';
import styles from './Home.module.css';
import Skills from './skills/Skills';

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.tittle} animeLeft`}>
        <div>
          <h1>Gabriel Majeski</h1>
          <p className={styles.frontTittle}> {'>'} Front-end Developer</p>
        </div>
        <div>
          <p>// Você pode visitar minha página no GitHub</p>
          <p>
            <span>const</span> <span>githubLink</span> ={' '}
            <a
              className={styles.gitLink}
              href="https://github.com/gabrielmajeski"
              target="_blank"
            >
              'https://github.com/gabrielmajeski'
            </a>
          </p>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default Home;
