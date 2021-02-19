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
  },
  1: {
    price: 6.99,
    name: 'Scottish Breakfast',
    type: 'black',
    img: scottish,
  },
  2: {
    price: 9.99,
    name: 'Banana Split',
    type: 'black',
    img: banana,
  },
  3: {
    price: 15.99,
    name: 'Black Chocolate',
    type: 'black',
    img: chocolate,
  },
  4: {
    price: 14.99,
    name: 'Assam',
    type: 'black',
    img: assam,
  },
  5: {
    price: 11.99,
    name: 'Darjeeling',
    type: 'black',
    img: darjeeling,
  },
  6: {
    price: 8.99,
    name: 'Ryokucha',
    type: 'green',
    img: ryokucha,
  },
  7: {
    price: 16.99,
    name: 'Bancha',
    type: 'green',
    img: bancha,
  },
  8: {
    price: 9.99,
    name: 'Ginger',
    type: 'herbal',
    img: ginger,
  },
  9: {
    price: 15.99,
    name: 'Hibiscus',
    type: 'herbal',
    img: hibiscus,
  },
  10: {
    price: 14.99,
    name: 'Phoenix',
    type: 'oolong',
    img: phoenix,
  },
  11: {
    price: 11.99,
    name: 'High Mountain',
    type: 'oolong',
    img: mountain,
  },
  12: {
    price: 11.99,
    name: 'Bai Mu Dan',
    type: 'white',
    img: baimu,
  },
  13: {
    price: 11.99,
    name: 'Shou Mei',
    type: 'white',
    img: shoumei,
  },
};

export const TEA_TYPES = ['black', 'green', 'oolong', 'white', 'herbal'];
