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
  max-width: 200px;
  margin: 0 auto;

  @media (min-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(0px, 100px));
    margin: unset;
    margin-left: 2em;
    gap: 3em;
    max-width: 1200px;
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(0px, 200px));
  }
`;

export const Section = styled.div`
  display: flex;
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
  margin-top: 0;
  font-size: 0.8rem;
`;

export const Pane = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin: 3em auto;
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
