import React from 'react';
import styles from './About.module.css';
import Dropdown from '../dropdown/Dropdown';
import { NavLink, Route, Routes } from 'react-router-dom';
import AboutResume from './AboutResume';
import AboutEducation from './AboutEducation';
import AboutWorkExperience from './AboutWorkExperience';
import JavaScript from '../../Assets/JavaScriptIcon';
import useMedia from '../../Hooks/useMedia';
import AboutCV from './AboutCV';
import Aside from '../helper/Aside';
import Head from '../helper/Head';

const About = () => {
  const mobile = useMedia('(max-width: 1300px)');

  return (
    <>
      <Head
        title="Sobre"
        description="Sobre do portfolio, com dados sobre skills e meus curriculo"
      />
      {mobile ? (
        <AboutCV style={{ gridColumn: '1 / -1' }} />
      ) : (
        <>
          <Aside>
            <Dropdown custom={true} text={'Informações'}>
              <li>
                <JavaScript />
                <NavLink to="" end>
                  sobre.js
                </NavLink>
              </li>
              <li>
                <JavaScript />
                <NavLink to="workexperience">experiencia.js</NavLink>
              </li>
              <li>
                <JavaScript />
                <NavLink to="education">educacao.js</NavLink>
              </li>
            </Dropdown>
          </Aside>
          <div className={styles.container}>
            <Routes>
              <Route path="/" element={<AboutResume />} />
              <Route path="/workexperience" element={<AboutWorkExperience />} />
              <Route path="/education" element={<AboutEducation />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
};

export default About;
