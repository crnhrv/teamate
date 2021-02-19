import { Card, Sidebar } from '../components';
import { useFilter } from '../hooks/use_filter';
import { TEA_TYPES } from '../constants/teas';

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
            <Card key={tea.price + tea.name}>
              <Card.Image src={tea.img} alt={tea.name} />
              <Card.Header>{tea.name}</Card.Header>
              <Card.Text>£{tea.price}</Card.Text>
            </Card>
          );
        })}
      </Card.Group>
    </>
  );
};
