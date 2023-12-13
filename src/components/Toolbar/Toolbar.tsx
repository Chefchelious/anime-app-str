import React from 'react';
import {NavLink} from "react-router-dom";

import logo from '../../img/logo.png';
import './Toolbar.css';

const Toolbar = () => {
  return (
    <header className="header">
      <div className="container header__content">
        <NavLink to="/"  className="header__logo-wrap">
          <img className="header__logo"  src={logo} alt="anime-posony"/>
        </NavLink>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">Home</NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/popular" className="nav__link">Popular</NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/portfolio" className="nav__link">My portfolio </NavLink>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  );
};

export default Toolbar;