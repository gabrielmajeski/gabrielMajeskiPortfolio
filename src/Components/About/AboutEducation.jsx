import React from 'react';
import CodeBlock from '../contact/CodeBlock';
import styles from './AboutEducation.module.css';

const education = [
  {
    institution: 'QI Faculdade e Escola Técnica',
    course: 'Técnico em informática',
    duration: '2018 - 2019',
  },
];

const certification = [
  {
    institution: 'Origamid',
    course: 'React Completo',
    completedAt: 'jan de 2024',
  },
  {
    institution: 'Origamid',
    course: 'Web Design Completo',
    completedAt: 'fev de 2021',
  },
];

const AboutEducation = () => {
  return (
    <CodeBlock color={'white'}>
      <span data-line>//Educação</span>
      <span data-line></span>
      <span data-line>
        <span style={{ color: '#C98BDF' }}>const</span>{' '}
        <span style={{ color: '#4D5BCE' }}>educacao</span> <span>= [</span>
      </span>
      <span data-line>&#123;</span>
      {education.map((edu) => (
        <>
          <span data-line>
            <span className={styles["item-title"]}>instituicao:</span>
            <span className={styles["item-title-value"]}>'{edu.institution}'</span>,
          </span>
          <span data-line>
            <span className={styles["item-title"]}>curso:</span>
            <span className={styles["item-title-value"]}>'{edu.course}'</span>,
          </span>
          <span data-line>
            <span className={styles["item-title"]}>duracao:</span>
            <span className={styles["item-title-value"]}>'{edu.duration}'</span>,
          </span>
          <span data-line>&#125;</span>
        </>
      ))}
      <span data-line>]</span>
      <span data-line></span>

      <span data-line>//Certificados</span>
      <span data-line></span>
      <span data-line>
        <span style={{ color: '#C98BDF' }}>const</span>{' '}
        <span style={{ color: '#4D5BCE' }}>certificados</span> <span>= [</span>
      </span>
      <span data-line>&#123;</span>
      {certification.map((cert) => (
        <>
          <span data-line>
            <span className={styles["item-title"]}>instituicao:</span>
            <span className={styles["item-title-value"]}>'{cert.institution}'</span>,
          </span>
          <span data-line>
            <span className={styles["item-title"]}>curso:</span>
            <span className={styles["item-title-value"]}>'{cert.course}'</span>,
          </span>
          <span data-line>
            <span className={styles["item-title"]}>emitido:</span>
            <span className={styles["item-title-value"]}>'{cert.completedAt}'</span>,
          </span>
          <span data-line>&#125;,</span>
        </>
      ))}
      <span data-line>]</span>
      <span data-line></span>
    </CodeBlock>
  );
};

export default AboutEducation;
