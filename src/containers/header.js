import { useToggle } from '../hooks/use_toggle';
import { Header } from '../components';
import { HEADER_ROUTES } from '../constants/routes';
import { CartContext } from '../contexts/cart_context';
import { useContext } from 'react';

export const HeaderContainer = ({ active, children, ...restProps }) => {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);
  const { cartItems } = useContext(CartContext);
  return (
    <Header {...restProps}>
      <Header.Logo>TeaMate</Header.Logo>
      <Header.Navbar>
        <Header.Hamburger onClick={toggleIsMenuOpen}></Header.Hamburger>
        <Header.NavList open={isMenuOpen}>
          <Header.Exit onClick={toggleIsMenuOpen}></Header.Exit>
          {Object.values(HEADER_ROUTES).map((route) => {
            return (
              <Header.NavItem key={route.title + route.path}>
                <Header.NavLink active={active === route.title} to={route.path}>
                  {route.title}
                  {route.title === 'cart' && (
                    <Header.Notification amount={cartItems.length} />
                  )}
                </Header.NavLink>
              </Header.NavItem>
            );
          })}
        </Header.NavList>
      </Header.Navbar>
      {children}
    </Header>
  );
};
