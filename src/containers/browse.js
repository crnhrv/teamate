import { Card, Sidebar } from '../components';
import { useFilter } from '../hooks/use_filter';
import { TEA_TYPES } from '../constants/teas';
import { Link } from 'react-router-dom';

export const BrowseContainer = () => {
  const { teaData, filter, setFilter } = useFilter();

  return (
    <>
      <Sidebar>
        {TEA_TYPES.map((type) => {
          let active = type === filter ? true : false;
          return (
            <Sidebar.Item
              active={active}
              onClick={() => setFilter(type)}
              key={type}
            >
              {type}
            </Sidebar.Item>
          );
        })}
      </Sidebar>
      <Card.Group>
        {teaData.map((tea) => {
          return (
            <Card key={tea.id}>
              <Link to={`/product/${tea.id}`}>
                <Card.Image src={tea.img} alt={tea.name} />
                <Card.Header>{tea.name}</Card.Header>
                <Card.Text>£{tea.price}</Card.Text>
              </Link>
              <Card.Button>Add to Cart</Card.Button>
            </Card>
          );
        })}
      </Card.Group>
    </>
  );
};
