import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import HamburgerMenu from '../assets/HamburgerMenu';
import CloseButton from '../assets/CloseButton';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <p>gabriel-majeski</p>
      </div>
      <ul
        onClick={() => setIsOpen(false)}
        className={`animeTop ${isOpen ? styles.openMenu : ''} ${styles.navUl}`}
      >
        <li>
          <NavLink to="/" end>
            _home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">_sobre</NavLink>
        </li>
        <li>
          <NavLink to="/projects">_projetos</NavLink>
        </li>
        <li>
          <NavLink to="/contact">_contato</NavLink>
        </li>
      </ul>
      <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        {isOpen ? (
          <CloseButton onClick={toggleMenu} />
        ) : (
          <HamburgerMenu onClick={toggleMenu} />
        )}
      </div>
    </nav>
  );
};

export default Header;
