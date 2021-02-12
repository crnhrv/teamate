import { About } from '../pages/about';
import { Browse } from '../pages/browse';
import { Cart } from '../pages/cart';
import { Contact } from '../pages/contact';
import { Home } from '../pages/home';

export const ROUTES = {
  HOME: {
    path: '/',
    title: 'home',
    component: Home,
  },
  BROWSE: {
    path: '/browse',
    title: 'browse',
    component: Browse,
  },
  CART: {
    path: '/cart',
    title: 'cart',
    component: Cart,
  },
  ABOUT: {
    path: '/about',
    title: 'about',
    component: About,
  },
  CONTACT: {
    path: '/contact',
    title: 'contact',
    component: Contact,
  },
};
