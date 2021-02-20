import { HeaderContainer } from '../containers/header';
import { useParams, useHistory } from 'react-router-dom';
import { HEADER_ROUTES } from '../constants/routes';
import { Card } from '../components';
import { TEAS } from '../constants/teas';
import { useContext } from 'react';
import { CartContext } from '../contexts/cart_context';

export const Product = (props) => {
  const { id } = useParams();
  const { goBack } = useHistory();
  const tea = Object.values(TEAS).find((tea) => tea.id === Number(id));
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <HeaderContainer active={HEADER_ROUTES.BROWSE.title} />
      <Card.Pane dir="column">
        <Card.Section>
          <Card.Button onClick={goBack}>Back</Card.Button>
          <Card.Button onClick={() => addToCart(tea)}>Add to Cart</Card.Button>
        </Card.Section>
        <Card.Header>
          {tea.name} - <Card.Accent>£{tea.price}</Card.Accent>
        </Card.Header>
        <Card.Image src={tea.img} />
        <Card.Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Card.Text>
      </Card.Pane>
    </>
  );
};
