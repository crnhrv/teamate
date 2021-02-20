import {
  Container,
  Navbar,
  NavItem,
  Notification,
  NavLink,
  NavList,
  Hamburger,
  Exit,
  Logo,
} from './styles/header';

const Header = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Header.Navbar = ({ children, ...restProps }) => {
  return <Navbar {...restProps}>{children}</Navbar>;
};

Header.NavList = ({ open, children, ...restProps }) => {
  return (
    <NavList open={open} {...restProps}>
      {children}
    </NavList>
  );
};

Header.NavItem = ({ children, ...restProps }) => {
  return <NavItem {...restProps}>{children}</NavItem>;
};

Header.NavLink = ({ active, children, ...restProps }) => {
  return (
    <NavLink active={active ? 1 : 0} {...restProps}>
      {children}
    </NavLink>
  );
};

Header.Hamburger = ({ open, onClick }) => {
  return (
    <Hamburger open={open} onClick={onClick} viewBox="0 0 27.329 17">
      <g transform="translate(-415.671 -19)">
        <line
          x1="24.329"
          transform="translate(417.171 34.5)"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <line
          x1="24.329"
          transform="translate(417.171 27.5)"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <line
          x1="17"
          transform="translate(424.5 20.5)"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </g>
    </Hamburger>
  );
};

Header.Exit = ({ open, onClick }) => {
  return (
    <Exit
      open={open}
      onClick={onClick}
      width="48.968"
      height="48.968"
      viewBox="0 0 48.968 48.968"
    >
      <g transform="translate(-378.092 -80.939)">
        <path
          d="M383,82l-46.847,46.847"
          transform="translate(43)"
          fill="none"
          stroke="#000"
          strokeWidth="3"
        />
        <path
          d="M336.153,82l46.673,46.673"
          transform="translate(43)"
          fill="none"
          stroke="#000"
          strokeWidth="3"
        />
      </g>
    </Exit>
  );
};

Header.Logo = ({ children, ...restProps }) => {
  return <Logo {...restProps}>{children}</Logo>;
};

Header.Notification = ({ amount }) => {
  return <Notification amount={amount}>{amount}</Notification>;
};

export default Header;
