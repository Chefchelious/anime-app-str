import {ISlide, TIngredient} from "./types";

import meatImage from '../src/img/meat.png';
import cheeseImage from '../src/img/cheese.png';
import saladImage from '../src/img/salad.png';
import baconImage from '../src/img/bacon.png';

export const slides: ISlide[] = [
  {id: '1', url: 'https://i.redd.it/4rimy1xsfje81.jpg', title: "Cool anime 1", info: "I do not know what kind of anime it is, but I think it's cool anime ahahahhaha",},
  {id: '2', url: 'https://wallpapersmug.com/download/1920x1080/d55e88/satoru-gojo-4k.jpeg',title: "Cool anime 2", info: "I do not know what kind of anime it is, but I think it's cool anime ahahahhaha",},
  {id: '3',url: 'https://getwallpapers.com/wallpaper/full/d/c/8/423316.jpg', title: "Cool anime 3", info: "I do not know what kind of anime it is, but I think it's cool anime ahahahhaha",},
  {id: '4',url: 'https://wallpapercave.com/wp/wp2745298.jpg', title: "Cool anime 4", info: "I do not know what kind of anime it is, but I think it's cool anime ahahahhaha",},
  {id: '5',url: 'https://a-static.besthdwallpaper.com/denji-hybrid-form-anime-art-from-chainsaw-man-wallpaper-1920x1080-106127_48.jpg', title: "Cool anime 5", info: "I do not know what kind of anime it is, but I think it's cool anime ahahahhaha",},
  {id: '6',url: 'https://kalix.club/uploads/posts/2022-12/1671577911_kalix-club-p-magicheskaya-bitva-oboi-na-telefon-pintere-3.jpg', title: "Cool anime 555", info: "I do not know what kind of anime it is, but I think it's cool anime ahahahhaha",},
];

export const INGREDIENTS: TIngredient[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: saladImage},
  {name: 'Bacon', price: 60, image: baconImage},
];