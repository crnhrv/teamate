import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.9em;
`;

export const Logo = styled.a`
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--accent);
  cursor: pointer;
`;

export const Hamburger = styled.svg`
  width: 1.5em;
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const Exit = styled.svg`
  position: absolute;
  top: 1em;
  right: 2em;
  width: 1.5em;
  filter: invert(1);
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const Navbar = styled.nav`
  transition: transform 0.3s ease;
`;

export const NavList = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  display: grid;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  align-content: start;
  background: var(--secondary);
  margin: 0;
  padding: 6em 0;
  width: 40%;
  height: 100vh;
  list-style: none;
  z-index: 1;

  @media (min-width: 600px) {
    position: unset;
    display: flex;
    height: auto;
    background: none;
    width: auto;
    padding: 0;
    margin: 0;
    list-style: none;
    z-index: initial;
    transform: none;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)`
  position: relative;
  display: block;
  padding: 0.6em 1em;
  width: 100%;
  text-decoration: none;
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: ${({ active }) => (active ? 'bold' : 'regular')};
  color: ${({ active }) => (active ? 'var(--primary)' : 'white')};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--primary);
    color: var(--secondary);
    color: ${({ active }) => (active ? 'initial' : 'var(--primary)')};
  }

  @media (min-width: 600px) {
    margin: 0;
    padding: 0 1em;
    font-size: 1.4rem;
    color: ${({ active }) => (active ? 'var(--accent)' : 'var(--secondary)')};

    &:hover,
    &:focus {
      color: rgba(255, 255, 255, 0.733);
      color: ${({ active }) => (active ? 'var(--accent)' : 'var(--hover)')};
    }
  }
`;

export const Notification = styled.div`
  display: ${({ amount }) => (amount ? 'block' : 'none')};
  position: absolute;
  right: 5px;
  bottom: 10px;
  z-index: 1;
  background-color: rgba(100, 100, 100, 0.1);
  border-radius: 5px;
  padding: 3px;
  width: 24px;
  height: 24px;
  text-align: center;
  font-size: 1rem;
  color: black;
  font-weight: bold;
`;
