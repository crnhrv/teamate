import { HeaderContainer } from '../containers/header';
import { HEADER_ROUTES } from '../constants/routes';

export const Cart = () => {
  return <HeaderContainer active={HEADER_ROUTES.CART.title} />;
};
