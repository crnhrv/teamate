import { Card, Sidebar } from '../components';
import { TEAS } from '../constants/teas';

export const BrowseContainer = ({ children, ...restProps }) => {
  const tea = TEAS[0];
  return (
    <>
      <Sidebar>
        <Sidebar.Item active>Black</Sidebar.Item>
        <Sidebar.Item>Green</Sidebar.Item>
        <Sidebar.Item>Oolong</Sidebar.Item>
        <Sidebar.Item>White</Sidebar.Item>
        <Sidebar.Item>Herbal</Sidebar.Item>
      </Sidebar>
      <Card.Group>
        <Card key={tea.price + tea.name}>
          <Card.Image src={tea.img} alt={tea.name} />
          <Card.Header>{tea.name}</Card.Header>
          <Card.Text>£{tea.price}</Card.Text>
        </Card>
        <Card key={tea.price + tea.name}>
          <Card.Image src={tea.img} alt={tea.name} />
          <Card.Header>{tea.name}</Card.Header>
          <Card.Text>£{tea.price}</Card.Text>
        </Card>
        <Card key={tea.price + tea.name}>
          <Card.Image src={tea.img} alt={tea.name} />
          <Card.Header>{tea.name}</Card.Header>
          <Card.Text>£{tea.price}</Card.Text>
        </Card>
        <Card key={tea.price + tea.name}>
          <Card.Image src={tea.img} alt={tea.name} />
          <Card.Header>{tea.name}</Card.Header>
          <Card.Text>£{tea.price}</Card.Text>
        </Card>
        <Card key={tea.price + tea.name}>
          <Card.Image src={tea.img} alt={tea.name} />
          <Card.Header>{tea.name}</Card.Header>
          <Card.Text>£{tea.price}</Card.Text>
        </Card>
        <Card key={tea.price + tea.name}>
          <Card.Image src={tea.img} alt={tea.name} />
          <Card.Header>{tea.name}</Card.Header>
          <Card.Text>£{tea.price}</Card.Text>
        </Card>
      </Card.Group>

      {children}
    </>
  );
};
