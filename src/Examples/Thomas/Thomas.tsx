import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import {TSquare} from "../../types";
import SquareWrapper from "../ThomasComponents/SquareWrapper/SquareWrapper";
import ResetBtn from "../ThomasComponents/Buttons/ResetBtn";
import Counter from "../ThomasComponents/Counter/Counter";

import './Thomas.css';

const Thomas = () => {
    const navigate = useNavigate();

    const createItems = (): TSquare[] => {
        const items: TSquare[] = [];

        for (let i: number = 0; i < 36; i++) {
            const item: TSquare = {
                hasItem: false,
                clicked: false
            };
            items.push(item);
        }

        const randomIndex: number = Math.floor(Math.random() * items.length);

        items[randomIndex] = {
            hasItem: true,
            clicked: false
        };

        return items;
    };

    const [items, setItems] = useState(createItems);
    const [counter, setCounter] = useState(0);

    const changeClick= (index: number) => {
        const itemsCopy = [...items];
        const itemObj = {...itemsCopy[index]};

        if (!itemObj.clicked) {
            itemObj.clicked = !itemObj.clicked;
            itemsCopy[index] = itemObj;

            let counterCopy = counter;
            counterCopy++;
            setCounter(counterCopy);
            setItems(itemsCopy);
        }
    };

    const resetGame = () => {
        setItems(createItems)
        setCounter(0);
    };

    return (
      <div className="App">
          <button className="closeBtn" onClick={() => navigate('/portfolio')}>x</button>
          <SquareWrapper items={items} changeClick={changeClick} />
          <div>
              <ResetBtn resetGame={resetGame} />
              <Counter counter={counter} />
          </div>

      </div>
    );
};

export default Thomas;