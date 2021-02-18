import { Container, Item } from './styles/sidebar';

const Sidebar = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Sidebar.Item = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>;
};

export default Sidebar;
