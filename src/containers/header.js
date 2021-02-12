import { useToggle } from '../hooks/useToggle';
import { Header } from '../components';

export const HeaderContainer = ({ active, children, ...restProps }) => {
  const paths = ['home', 'browse', 'cart', 'about', 'contact'];
  const [menuOpen, toggleMenuOpen] = useToggle(false);

  return (
    <Header>
      <Header.Logo>TeaMate</Header.Logo>
      <Header.Navbar>
        <Header.Hamburger onClick={() => toggleMenuOpen()}></Header.Hamburger>
        <Header.NavList open={menuOpen}>
          <Header.Exit onClick={() => toggleMenuOpen()}></Header.Exit>
          {paths.map((path) => {
            return (
              <Header.NavItem key={path}>
                <Header.NavLink active={active === path} to={path}>
                  {path}
                </Header.NavLink>
              </Header.NavItem>
            );
          })}
        </Header.NavList>
      </Header.Navbar>
    </Header>
  );
};
