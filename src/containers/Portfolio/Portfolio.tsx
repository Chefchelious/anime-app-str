import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './Portfolio.css';


const Portfolio = () => {
  return (
    <>
      <div className="container" style={{paddingTop: '150px'}}>
        <div className="app__wrap">
          <h4 className="app__title">Burger constructor - <span>собери свой бургер с кайфом</span></h4>
          <NavLink to="burger" className="app__btn">Try it</NavLink>
        </div>
        <hr/>

        <div className="app__wrap">
          <h4 className="app__title">Find Thomas - <span>найди паровозик Томас, пока он не нашел тебя...</span></h4>
          <NavLink to="thomas" className="app__btn">Try it</NavLink>
        </div>
        <hr/>
      </div>

      <div className="container">
        <Outlet />
      </div>

    </>

  );
};

export default Portfolio;