import React from 'react';
import {useNavigate} from "react-router-dom";

const Burger = () => {
  const navigate = useNavigate();
  return (
    <div>
      тут будет бургер
      <button onClick={() => navigate('/portfolio')}>Close</button>
    </div>
  );
};

export default Burger;