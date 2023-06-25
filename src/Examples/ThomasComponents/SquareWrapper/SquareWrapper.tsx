import React from 'react';
import Squares from "./Squares";

import {TSquare} from "../../../types";


interface IProps {
    items: TSquare[];
    changeClick: (index: number) => void
}

const SquareWrapper:React.FC<IProps> = ({items, changeClick}) => {

    const imgEl: React.ReactNode = <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFb_alK2fqjKjmd-kT3Qsl0gXyHD0Gu_785pEBdZTweQ&s" alt="thomas" />;
    return (
        <div className="square-container">
            {items.map((item, index) => (
                <Squares changeClick={() => changeClick(index)} ringEl={item.hasItem ? imgEl : ''} hasItem={item.hasItem} key={index} clicked={item.clicked} />
            ))}
        </div>
    );
};

export default SquareWrapper;