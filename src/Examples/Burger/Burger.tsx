import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {TStateIngredient} from "../../types";
import {INGREDIENTS} from "../../constants";
import IngredientsBlock from "../BurgerComponents/IngredientsBlock/IngredientsBlock";
import BurgerBlock from "../BurgerComponents/BurgerBlock/BurgerBlock";

import './Burger.css';

const Burger = () => {
  const navigate = useNavigate();

  const [ingredients, setIngredients] = useState<TStateIngredient[]>([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const [burgerPrice, setBurgerPrice] = useState(30);

  const addIngredient = (name: string) => {
    setIngredients((prev) => {
      return prev.map((ingredient, index) => {
        if(ingredient.name === name) {
          setBurgerPrice(prev => prev + INGREDIENTS[index].price);
          return {
            ...ingredient,
            count: ingredient.count + 1,
          }
        }

        return ingredient;
      });
    });
  };

  const removeIngredient = (name: string) => {
    setIngredients((prev) => {
      return prev.map((ingredient, index) => {
        if(ingredient.name === name) {
          setBurgerPrice(prev => prev - INGREDIENTS[index].price * ingredient.count);

          return {
            ...ingredient,
            count: 0,
          }
        }
        return ingredient;
      });
    })
  };

  return (
    <>
      <button className="closeBtn" onClick={() => navigate('/portfolio')}>x</button>
      <div className="App-burger">
        <IngredientsBlock ingredients={ingredients} addIngredient={addIngredient} removeIngredient={removeIngredient} />

        <BurgerBlock ingredients={ingredients} burgerPrice={burgerPrice} />
      </div>
    </>
  );
};

export default Burger;