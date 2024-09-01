import React from 'react';
import styles from './AboutWorkExperience.module.css';
import CodeBlock from '../contact/CodeBlock';

const experience = [
  {
    company: 'Denakop',
    job: 'Web Analyst',
    period: 'Dezembro de 2022 - Janeiro de 2024',
    functions: [
      'Desenvolvimento web utilizando JavaScript, HTML, CSS, Bootstrap e jQuery.',
      'Suporte e gestão de sites WordPress, incluindo resolução de problemas e otimização de plugins.',
      'Criação e aprimoramento de layouts web usando Figma.',
      'Gerenciamento e implementação de ferramentas de publicidade para sites.',
      'Garantia do maior engajamento e eficácia na colocação de anúncios.',
      'Análise de métricas e desempenho de mídia paga.',
      'Identificação e acompanhamento de KPIs e tradução de dados complexos em insights relevantes.',
      'Colaboração com equipes multidisciplinares para alinhar os esforços de desenvolvimento web aos objetivos gerais da empresa.',
    ],
  },
  {
    company: 'Moovin Plataforma E-commerce',
    job: 'Product Owner',
    period: 'Janeiro de 2021 - Setembro de 2022',
    functions: [
      'Realização de estudos aprofundados sobre plataformas concorrentes para identificar oportunidades de melhorias.',
      'Desenvolvimento e manutenção do backlog do produto, garantindo alinhamento com os objetivos e metas do projeto.',
      'Reuniões com stakeholders para discutir progressos, coletar feedbacks e alinhar prioridades.',
      'Criação e gestão de Sprints, supervisionando o ciclo de vida do desenvolvimento do produto e garantindo a entrega pontual de recursos.',
      'Colaboração com equipes multidisciplinares para traduzir necessidades de negócios em requisitos técnicos.',
      'Acompanhamento de avanços da indústria e tecnologias emergentes para impulsionar a inovação dentro do produto.',
      'Colaboração com equipes multidisciplinares para alinhar os esforços de desenvolvimento web aos objetivos gerais',
    ],
  },
  {
    company: 'Moovin Plataforma E-commerce',
    job: 'Helpdesk Pleno',
    period: 'Outubro de 2020 - Janeiro de 2021',
    functions: [
      'Integração e solução de problemas de APIs RESTful, garantindo comunicação e funcionalidade de dados contínuos em aplicações web.',
      'Execução de operações CRUD no banco de dados para solucionar problemas específicos.',
      'Colaboração estreita com equipes de desenvolvimento para garantir suporte de alta qualidade e',
      'resolução oportuna de problemas de frontend e backend.',
      'Condução e monitoramento de processos de atendimento ao cliente e treinamento de clientes.',
      'Participação e condução de reuniões com parceiros como Marketplaces e plataformas ERP.',
      'Engajamento no desenvolvimento e habilitação de processos para testes e identificação de cenários de bugs.',
    ],
  },
  {
    company: 'Moovin Plataforma E-commerce',
    job: 'Helpdesk',
    period: 'Setembro de 2019 - Setembro de 2020',
    functions: [
      'Fornecimento de suporte técnico e resolução de problemas para aplicações web garantindo experiências de usuário contínuas.',
      'Colaboração com equipes de desenvolvimento para identificar e resolver problemas de frontend, ',
      'contribuindo para a estabilidade e desempenho geral do projeto.',
      'Atualização contínua de conhecimentos técnicos e ',
      'habilidades em tecnologias frontend chave para fornecer soluções de suporte atualizadas',
      'Proatividade na comunicação com equipes multidisciplinares, garantindo a resolução oportuna de desafios relacionados ao frontend.',
    ],
  },
];

const AboutWorkExperience = () => {
  return (
    <CodeBlock color={'white'} className={styles.container}>
      <span data-line>// Experiências</span>
      <span data-line></span>
      <span data-line>
        <span style={{ color: '#C98BDF' }}>const</span>{' '}
        <span style={{ color: '#4D5BCE' }}>experiencia</span> <span>= [</span>
      </span>
      {experience.map((exp, index) => (
        <>
          <span data-line>&#123;</span>
          <span data-line>
            <span className={styles["item-title"]}>empresa:</span>
            <span className={styles["item-title-value"]}> '{exp.company}'</span>,
          </span>
          <span data-line>
            <span className={styles["item-title"]}>cargo:</span>
            <span className={styles["item-title-value"]}> '{exp.job}'</span>,
          </span>
          <span data-line>
            <span className={styles["item-title"]}>periodo:</span>
            <span className={styles["item-title-value"]}> '{exp.period}'</span>,
          </span>
          <span data-line>
            <span className={styles["item-title"]}>funcoes:</span>
            <span> [</span>
          </span>
          {exp.functions.map((f, index) => (
            <span className={styles.functions} key={index} data-line>
              <span className={styles["functions-list"]}>'{f}'</span>
              <span>,</span>
            </span>
          ))}
          <span data-line>]</span>
          <span data-line>&#125;,</span>
        </>
      ))}
      <span data-line>]</span>
    </CodeBlock>
  );
};

export default AboutWorkExperience;
