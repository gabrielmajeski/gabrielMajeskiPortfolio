import React from 'react';
import { SkillBars } from 'react-skills';
import styles from '../skills/Skills.module.css';

const Skills = () => {
  const skillsData = [
    {
      name: 'HTML5',
      level: 80,
      color: '#FEA55F',
      duration: 5,
    },
    {
      name: 'CSS',
      level: 80,
      color: '#FEA55F',
      duration: 5,
    },
    {
      name: 'JavaScript',
      level: 60,
      color: '#FEA55F',
      duration: 5,
    },
    {
      name: 'ReactJS',
      level: 60,
      color: '#FEA55F',
      duration: 5,
    },
    {
      name: 'WordPress',
      level: 50,
      color: '#FEA55F',
      duration: 5,
    },

    {
      name: 'Git',
      level: 50,
      color: '#FEA55F',
      duration: 5,
    },
    {
      name: 'MongoDB',
      level: 30,
      color: '#FEA55F',
      duration: 5,
    },
  ];
  return (
    <div className={`${styles.container} anime-right`}>
      <h2>Skills</h2>
      <SkillBars skills={skillsData} />
    </div>
  );
};

export default Skills;
