import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import HamburgerMenu from '../Assets/HamburgerMenu';
import CloseButton from '../Assets/CloseButton';

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
        className={`anime-top ${isOpen ? styles["open-menu"] : ''} ${styles["nav-ul"]}`}
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
