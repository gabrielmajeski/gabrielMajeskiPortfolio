import React from 'react';
import styles from './Dropdown.module.css';
import PageUp from '../../assets/PageUp';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ data, text, custom, children, ...props }) => {
  const [active, setActive] = React.useState(true);
  return (
    <div className={`${styles.container} animeDown`}>
      <p
        className={`${styles.title}`}
        style={{ color: active ? 'white' : '' }}
        onClick={() => setActive(!active)}
      >
        {text}
        <PageUp style={{ transform: active ? 'none' : 'rotate(180deg)' }} />
      </p>

      <ul
        className={`${active ? styles.showMenu : styles.hideMenu} ${
          styles.menu
        } animeLeft`}
      >
        {data
          ? custom
            ? children
            : data.map((opt, index) => (
                <li key={index}>
                  <div>
                    {opt.icon}
                    <a
                      href={opt.link}
                      target="_blank"
                      className="animeLeft"
                      {...props}
                    >
                      {opt.text}
                    </a>
                  </div>
                </li>
              ))
          : children}
      </ul>
    </div>
  );
};

export default Dropdown;
