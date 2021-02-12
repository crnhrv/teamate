import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  place-items: center;

  @media (min-width: 850px) {
    display: flex;
    justify-content: start;
    align-items: center;
  }
`;

export const Pane = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;

  @media (min-width: 850px) {
    padding-right: 2em;
  }
`;

export const Title = styled.h1`
  border-right: 0.15em solid var(--accent);
  margin-top: 1em;
  padding-right: 1em;
  font-size: 4.5rem;
  font-weight: lighter;
  font-family: 'Righteous', cursive;
  color: var(--secondary);

  @media (min-width: 850px) {
    margin-left: 1em;
    margin-right: 1em;
  }

  @media (min-width: 1000px) {
    margin-left: 3em;
    margin-right: 1em;
  }
`;
export const Subtitle = styled.p`
  font-size: 1.5rem;
  font-family: 'Righteous', cursive;
  color: white;

  @media (min-width: 500px) {
    margin-top: 1em;
    color: var(--secondary);
  }
`;

export const Accent = styled.span`
  color: var(--accent);
`;

export const Button = styled.button`
  background: none;
  background-color: var(--accent);
  border: none;
  margin-top: 0.5em;
  padding: 0.5em 1.5em;
  font: inherit;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #7f3705;
  }
`;
