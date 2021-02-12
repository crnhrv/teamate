import { useToggle } from '../hooks/use_toggle';
import { Header } from '../components';
import { ROUTES } from '../constants/routes';
export const HeaderContainer = ({ active, children, ...restProps }) => {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  return (
    <Header {...restProps}>
      <Header.Logo>TeaMate</Header.Logo>
      <Header.Navbar>
        <Header.Hamburger onClick={toggleIsMenuOpen}></Header.Hamburger>
        <Header.NavList open={isMenuOpen}>
          <Header.Exit onClick={toggleIsMenuOpen}></Header.Exit>
          {Object.values(ROUTES).map((route) => {
            return (
              <Header.NavItem key={route.title + route.path}>
                <Header.NavLink active={active === route.title} to={route.path}>
                  {route.title}
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
