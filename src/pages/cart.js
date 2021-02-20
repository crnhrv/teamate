import { HeaderContainer } from '../containers/header';
import { HEADER_ROUTES } from '../constants/routes';
import { CartContainer } from '../containers/cart';
import { useContext } from 'react';

import { CartContext } from '../contexts/cart_context';
import { Tagline, Card } from '../components';
import { CartPageWrapper } from './styles/cart';
import { useHistory } from 'react-router';
import { roundDecimal } from '../utils/round_decimal';

export const Cart = () => {
  const { goBack } = useHistory();

  const { cartItems } = useContext(CartContext);
  const total = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.count,
    0
  );
  const displayTotal = roundDecimal(total);
  const headerText = cartItems.length
    ? 'Almost Done Brewing..'
    : "Nothing Brewin'";
  return (
    <>
      <HeaderContainer active={HEADER_ROUTES.CART.title} />
      <CartPageWrapper>
        <Tagline margin={'1em 0 0.4em 0'} align="center">
          {headerText}
          {total ? (
            <Tagline.Subtitle>
              Total: <Tagline.Accent>£{displayTotal}</Tagline.Accent>
            </Tagline.Subtitle>
          ) : null}
        </Tagline>
        {cartItems.length ? (
          <CartContainer />
        ) : (
          <Card.Button onClick={goBack} size="large">
            Back
          </Card.Button>
        )}
      </CartPageWrapper>
    </>
  );
};
