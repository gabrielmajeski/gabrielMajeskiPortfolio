import React from 'react';
import Aside from '../helper/Aside';
import Dropdown from '../dropdown/Dropdown';
import styles from './Projects.module.css';
import ReactJS from '../../assets/ReactJS';
import Html5 from '../../assets/Html5';
import TerminalIcon from '../../assets/TerminalIcon';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

import Head from '../helper/Head';

const projectsData = [
  {
    id: 1,
    type: 'react',
    name: 'Dogs',
    tags: ['ReactJS', 'CSS Modules', 'Custom Hooks'],
    img: {
      src: 'https://gabrielmajeski-portfolio.s3.amazonaws.com/homeDogs.png',
      alt: 'Imagem padrão',
    },
    description:
      'Aplicativo semelhante ao Instagram feito utilizando ReactJS, Custom Hooks, Hooks e JWT, a aplicação conta com um sistema de cadastro, login e mudança de senha funcional, é possível também postar fotos, comentar fotos e ver estatisticas referentes as fotos (Quantidade de visualizações).',
    gitHubLink: 'https://github.com/gabrielmajeski/dogs',
    preview: 'https://gabrielmajeski.github.io/dogs/',
  },
  {
    id: 2,
    type: 'react',
    name: 'Pokedex',
    tags: ['ReactJS', 'CSS Modules', 'Custom Hooks'],
    img: {
      src: 'https://gabrielmajeski-portfolio.s3.amazonaws.com/homePokedex.png',
      alt: 'Imagem padrão',
    },
    description:
      'Pokédex responsiva feita com ReactJS, Hooks, consumindo o PokeApi e usando LocalStorage.',
    gitHubLink: 'https://github.com/gabrielmajeski/pokedex',
    preview: 'https://gabrielmajeski.github.io/pokedex/',
  },
  {
    id: 3,
    type: 'html',
    name: 'Santa Ideia',
    tags: ['HTML', 'CSS', 'JS'],
    img: {
      src: 'https://gabrielmajeski-portfolio.s3.amazonaws.com/homeSantaIdeia.png',
      alt: 'Imagem padrão',
    },
    description:
      'Site feito para expor os projetos de arquitetura da empresa @santaideia.arq, o mesmo foi feito utilizando HTML, CSS e JS para alguns efeitos e transições que existem no site.',
    gitHubLink: 'https://github.com/gabrielmajeski/santaideia',
    preview: 'https://gabrielmajeski.github.io/santaideia/',
  },
  {
    id: 4,
    type: 'html',
    name: 'BikCraft',
    tags: ['HTML', 'CSS', 'JS'],
    img: {
      src: 'https://gabrielmajeski-portfolio.s3.amazonaws.com/homeBikcraft.png',
      alt: 'Imagem padrão',
    },
    description:
      'Meu primeiro site que foi colocado no GitHub, o mesmo foi feito seguindo o curso de Web Designe completo da Origamid.',
    gitHubLink: 'https://github.com/gabrielmajeski/bikcraft',
    preview: 'https://gabrielmajeski.github.io/bikcraft/',
  },
];

const Projects = () => {
  const [projectFilter, setProjectFilter] = React.useState('all');
  const [projects, setProjects] = React.useState('');
  const [modalProject, setModalProject] = React.useState(null);

  const filtersValue = [
    { filter: 'all', name: 'Todos', icon: <TerminalIcon /> },
    { filter: 'html', name: 'HTML', icon: <Html5 /> },
    { filter: 'react', name: 'React', icon: <ReactJS /> },
  ];

  React.useEffect(() => {
    if (projectFilter === 'all') {
      setProjects(projectsData);
    } else {
      const filteredProject = projectsData.filter(
        (project) => project.type === projectFilter,
      );
      setProjects(filteredProject);
    }
  }, [projectFilter]);

  return (
    <>
      <Head
        title="Projetos"
        description="Projetos do portfolio, com informações dos meus projetos."
      />
      <Aside>
        <Dropdown text={'Projetos'}>
          {filtersValue.map((filters) => (
            <label className={styles.projectLabels} key={filters.filter}>
              <input
                type="checkbox"
                value={filters.filter}
                checked={projectFilter === filters.filter}
                onClick={({ target }) => setProjectFilter(target.value)}
              />
              {filters.icon}
              <p>{filters.name}</p>
            </label>
          ))}
        </Dropdown>
      </Aside>
      {modalProject && (
        <ProjectModal
          modalProject={modalProject}
          setModalProject={setModalProject}
        />
      )}
      <div className={`${styles.container} animeRight`}>
        {projects &&
          projects.map((p, index) => (
            <ProjectCard
              key={index}
              data={p}
              setModalProject={setModalProject}
            />
          ))}
      </div>
    </>
  );
};

export default Projects;
