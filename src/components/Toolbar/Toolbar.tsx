import React from 'react';
import logo from '../../img/logo.png';

import './Toolbar.css';

const Toolbar = () => {
  return (
    <header className="header">
      <div className="container header__content">
        <div className="header__logo-wrap">
          <img className="header__logo"  src={logo} alt="anime-posony"/>
        </div>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <span className="nav__link">Home</span>
            </li>

            <li className="nav__item">
              <span className="nav__link">Popular</span>
            </li>

            <li className="nav__item">
              <span className="nav__link">Airing</span>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Toolbar;