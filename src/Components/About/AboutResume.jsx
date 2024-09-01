import React from 'react';
import styles from './AboutResume.module.css'
import CodeBlock from '../contact/CodeBlock';
import AboutCV from './AboutCV';
import Skills from '../skills/Skills';

const AboutResume = () => {
  return (
    <div className={styles.container}>
        <CodeBlock color={'#bdbdbd'}>
            <span data-line>/**</span>
      <span data-line> * Sobre mim</span>
      <span data-line> * Sou um profissional experiente em desenvolvimento Frontend, com
      </span>
      <span data-line> * um histórico comprovado de trabalho em ambientes dinâmicos de{' '}
      </span>
      <span data-line> * tecnologia. Minha especialidade abrange desde a construção e
      </span>
      <span data-line> * manutenção de websites modernos e responsivos até a análise e{' '}
      </span>
      <span data-line> * otimização de plataformas e-commerce. Com habilidades sólidas em{' '}
      </span>
      <span data-line> * JavaScript, HTML, CSS, TypeScript, React, SASS, Bootstrap e{' '}
      </span>
      <span data-line> * jQuery, tenho experiência em oferecer soluções web inovadoras e{' '}
      </span>
      <span data-line> * eficientes.</span>
      <span data-line> * </span>
      <span data-line> * Meu foco é sempre na entrega de soluções de alta qualidade, que{' '}
      </span>
      <span data-line> * não apenas atendam, mas superem as expectativas dos clientes.{' '}
      </span>
      <span data-line> * Estou constantemente buscando novos desafios e oportunidades para{' '}
      </span>
      <span data-line> * crescer e contribuir significativamente no campo da tecnologia da{' '}
      </span>
      <span data-line> * informação. </span>
      <span data-line> */ </span>

    </CodeBlock>
    <div className={styles["right-aside"]}>
    <AboutCV/>
    <Skills></Skills>
    </div>
    </div>
  );
};

export default AboutResume;
