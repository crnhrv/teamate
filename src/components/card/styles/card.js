import styled from 'styled-components';
import { Button as Btn } from '../../hero/styles/hero';
export const Image = styled.img`
  max-width: 100%;
  transition: transform 0.1s ease;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
  max-width: 100%;
  cursor: pointer;

  &:hover ${Image} {
    transform: scale(1.1);
  }

  a {
    text-decoration: none;
  }
`;

export const Group = styled.div`
  grid-area: card;
  display: grid;
  gap: 1em;
  max-width: ${({ width }) => `${width}px`};
  margin: 0 auto;

  @media (min-width: 700px) {
    grid-template-columns: ${({ max }) =>
      `repeat(auto-fit, minmax(0px, ${max - 100}px))`};
    gap: 2em;
    margin: ${({ margin }) => margin};
    max-width: 1200px;
  }

  @media (min-width: 800px) {
    justify-content: ${({ justify }) => justify};
    grid-template-columns: ${({ max }) =>
      `repeat(auto-fit, minmax(0px, ${max}px))`};
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: ${({ dir }) => dir};
  width: 95%;
  justify-content: space-between;
`;

export const Header = styled.h2`
  align-self: center;
  text-align: center;
  margin: 0;
  margin-top: 0.25em;
  color: var(--secondary);
`;

export const Text = styled.p`
  align-self: center;
  text-align: center;
  margin: 0;
  color: var(--accent);
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.5em;
`;

export const Accent = styled.span`
  color: var(--accent);
`;

export const Button = styled(Btn)`
  margin-top: 0.5em;
  font-size: ${({ size }) => (size === 'large' ? '1.5rem' : '0.8rem')};
  grid-area: ${({ gridArea }) => gridArea};
  place-self: center;
`;

export const Input = styled.input`
  width: 23%;
  font-family: inherit;
  border: none;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.46);
  margin-left: 1em;
  margin-top: 10px;
  padding: 0.5em 0.5em;
`;

export const Pane = styled.div`
  display: flex;
  flex-direction: ${({ dir }) => dir};
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  margin: 2em auto 0 auto;
  padding: 1em;
  width: 90%;
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.12);
  text-align: center;

  ${Image} {
    width: 50%;
  }

  ${Header} {
    font-size: 2.5rem;
    margin: 1em 0;
  }

  ${Text} {
    margin: 2em 0;
    color: #211d1d;
  }

  ${Button} {
    margin-bottom: 1em;
  }
`;

export const CartPane = styled(Pane)`
  max-width: 500px;
  max-height: 250px;
  justify-content: center;

  ${Image} {
    max-height: 100px;
    width: auto;
  }

  ${Header} {
    font-size: 1.2rem;
    margin: 1em 0;
    color: var(--secondary);
  }

  ${Text} {
    align-self: unset;
    text-align: unset;
    margin: 0;
    color: var(--accent);
    font-weight: bold;
    font-size: 0.9rem;
    color: #211d1d;
  }

  ${Accent} {
    font-weight: bold;
  }

  ${Button} {
    display: block;
    margin: 1em auto;
  }
`;
