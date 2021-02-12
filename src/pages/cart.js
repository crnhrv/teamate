import { HeaderContainer } from '../containers/header';
import { ROUTES } from '../constants/routes';

export const Cart = () => {
  return <HeaderContainer active={ROUTES.CART.title} />;
};