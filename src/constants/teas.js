import assam from '../img/teas/assam.png';
import baimu from '../img/teas/baimu.png';
import banana from '../img/teas/banana.png';
import bancha from '../img/teas/bancha.png';
import chocolate from '../img/teas/chocolate.png';
import darjeeling from '../img/teas/darjeeling.png';
import ginger from '../img/teas/ginger.png';
import hibiscus from '../img/teas/hibiscus.png';
import irish from '../img/teas/irish.png';
import mountain from '../img/teas/mountain.png';
import phoenix from '../img/teas/phoenix.png';
import ryokucha from '../img/teas/ryokucha.png';
import scottish from '../img/teas/scottish.png';
import shoumei from '../img/teas/shoumei.png';

export const TEAS = {
  0: {
    price: 8.99,
    name: 'Irish Cream',
    type: 'black',
    img: irish,
    id: 0,
  },
  1: {
    price: 6.99,
    name: 'Scottish Breakfast',
    type: 'black',
    img: scottish,
    id: 1,
  },
  2: {
    price: 9.99,
    name: 'Banana Split',
    type: 'black',
    img: banana,
    id: 2,
  },
  3: {
    price: 15.99,
    name: 'Black Chocolate',
    type: 'black',
    img: chocolate,
    id: 3,
  },
  4: {
    price: 14.99,
    name: 'Assam',
    type: 'black',
    img: assam,
    id: 4,
  },
  5: {
    price: 11.99,
    name: 'Darjeeling',
    type: 'black',
    img: darjeeling,
    id: 5,
  },
  6: {
    price: 8.99,
    name: 'Ryokucha',
    type: 'green',
    img: ryokucha,
    id: 6,
  },
  7: {
    price: 16.99,
    name: 'Bancha',
    type: 'green',
    img: bancha,
    id: 7,
  },
  8: {
    price: 9.99,
    name: 'Ginger',
    type: 'herbal',
    img: ginger,
    id: 8,
  },
  9: {
    price: 15.99,
    name: 'Hibiscus',
    type: 'herbal',
    img: hibiscus,
    id: 9,
  },
  10: {
    price: 14.99,
    name: 'Phoenix',
    type: 'oolong',
    img: phoenix,
    id: 10,
  },
  11: {
    price: 11.99,
    name: 'High Mountain',
    type: 'oolong',
    img: mountain,
    id: 11,
  },
  12: {
    price: 11.99,
    name: 'Bai Mu Dan',
    type: 'white',
    img: baimu,
    id: 12,
  },
  13: {
    price: 11.99,
    name: 'Shou Mei',
    type: 'white',
    img: shoumei,
    id: 13,
  },
};

export const TEA_TYPES = ['black', 'green', 'oolong', 'white', 'herbal'];
