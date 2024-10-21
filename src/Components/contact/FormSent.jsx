import React from 'react';
import styles from './FormSent.module.css';

const FormSent = ({ setMsgSent }) => {
  return (
    <div className={`${styles.container} animeDown`}>
      <p>Muito obrigado!</p>
      <p>Sua mensagem foi enviada. Em breve entrarei em contato!</p>
      <button className={styles.button} onClick={() => setMsgSent(false)}>
        enviar-outra-mensagem
      </button>
    </div>
  );
};

export default FormSent;
