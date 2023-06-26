import {ISlide, TIngredient} from "./types";

import meatImage from '../src/img/meat.png';
import cheeseImage from '../src/img/cheese.png';
import saladImage from '../src/img/salad.png';
import baconImage from '../src/img/bacon.png';

import img1 from '../src/img/img1.jpg';
import img2 from '../src/img/img2.jpeg';
import img3 from '../src/img/img3.jpg';
import img4 from '../src/img/img4.jpg';
import img5 from '../src/img/img5.jpg';
import img6 from '../src/img/img6.jpg';

export const slides: ISlide[] = [
  {id: '1', url: img1, title: "Cool anime 1", info: "I do not know what kind of anime it is, but I think it's cool anime ahahahhaha",},
  {id: '2', url: img2,title: "Cool anime 2", info: "I do not know what kind of anime it is, but I think it's cool anime ahahahhaha",},
  {id: '3',url: img3, title: "Cool anime 3", info: "I do not know what kind of anime it is, but I think it's cool anime ahahahhaha",},
  {id: '4',url: img4, title: "Cool anime 4", info: "I do not know what kind of anime it is, but I think it's cool anime ahahahhaha",},
  {id: '5',url: img5, title: "Cool anime 5", info: "I do not know what kind of anime it is, but I think it's cool anime ahahahhaha",},
  {id: '6',url: img6, title: "Cool anime 555", info: "I do not know what kind of anime it is, but I think it's cool anime ahahahhaha",},
];

export const INGREDIENTS: TIngredient[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: saladImage},
  {name: 'Bacon', price: 60, image: baconImage},
];