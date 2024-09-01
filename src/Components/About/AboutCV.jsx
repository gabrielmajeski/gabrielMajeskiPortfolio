import React from 'react';
import styles from './AboutCV.module.css';

const AboutCV = ({ style }) => {
  return (
    <div style={style} className={`${styles.container} anime-right`}>
      <p>Olá!</p>
      <p>Caso queira baixar meu CV basta clicar no botão abaixo.</p>
      <button>
        <a href="/CVGabrielMajeski.pdf" download="CV_Gabriel_Majeski.pdf">
          Download
        </a>
      </button>
    </div>
  );
};

export default AboutCV;
