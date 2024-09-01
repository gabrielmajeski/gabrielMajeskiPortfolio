import React from 'react';
import styles from './ProjectDetail.module.css';
import GitIcon from '../../Assets/GitIcon';
import EyeIcon from '../../Assets/EyeIcon';

const ProjectDetail = ({ data }) => {
  return (
    <div className={`${styles.container} anime-down`}>
      <div className={styles.img}>
        <img src={data.img.src} alt={data.img.alt} />
      </div>
      <div className={styles.tittle}>
        <h2>{data.name}</h2>
      </div>
      <div className={styles.tags}>
        <p>Tecnologias: </p>
        <ul>
          {data.tags.map((tag, index) => (
            <li key={index}>
              <p>{tag}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.description}>
        <p>{data.description}</p>
      </div>
      <div className={styles["button-container"]}>
        <a href={data.gitHubLink} target="_blank" className={styles.button}>
          <GitIcon /> <p>GitHub</p>
        </a>
        <a href={data.preview} target="_blank" className={styles.button}>
          <EyeIcon /> <p>Preview</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
