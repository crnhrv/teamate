import { useContext } from 'react';
import { CartContext } from '../contexts/cart_context';
import { Card } from '../components';
import { roundDecimal } from '../utils/round_decimal';

export const CartContainer = () => {
  const {
    cartItems,
    removeFromCart,
    addToCart,
    checkingOut,
    checkOut,
  } = useContext(CartContext);
  const sortedCart = cartItems.sort((tea1, tea2) => tea1.id - tea2.id);

  return (
    <Card.Group width={1200} max={500} justify={'center'}>
      {sortedCart.map((tea) => {
        const price = roundDecimal(tea.price * tea.count);
        return (
          <Card.CartPane key={tea.id}>
            <Card.Image src={tea.img} alt={tea.name} />
            <Card.Header>
              {tea.name}
              <Card.Text>
                Amount:
                <Card.Input
                  value={tea.count}
                  onChange={({ target }) =>
                    Number(target.value) > tea.count
                      ? addToCart(tea, target.value - tea.count)
                      : removeFromCart(tea, tea.count - target.value)
                  }
                  type="number"
                ></Card.Input>
                <Card.Button onClick={() => removeFromCart(tea, tea.count)}>
                  Remove
                </Card.Button>
              </Card.Text>
            </Card.Header>
            <Card.Accent>£{price}</Card.Accent>
          </Card.CartPane>
        );
      })}
      <Card.Button
        onClick={checkOut}
        size={'large'}
        gridArea={cartItems.length > 1 ? `1 / 1 / 2 / -1` : '2 / 1 / 3 / 2'}
      >
        {checkingOut ? 'Waiting...' : 'Check Out'}
      </Card.Button>
    </Card.Group>
  );
};
