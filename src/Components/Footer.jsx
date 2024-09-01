import React from 'react';
import styles from './Footer.module.css';
import GitIcon from '../Assets/GitIcon';
import LinkedinIcon from '../Assets/LinkedinIcon';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <a href="https://github.com/gabrielmajeski" target="_blank">
          @gabrielmajeski
        </a>
        <GitIcon fill="#607B96" />
      </div>
    </footer>
  );
};

export default Footer;
