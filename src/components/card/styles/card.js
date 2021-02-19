import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  cursor: pointer;
`;

export const Group = styled.div`
  grid-area: card;
  display: grid;
  gap: 1em;
  place-content: center;
  max-width: 150px;
  margin: 0 auto;

  @media (min-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(0px, 100px));
    place-items: center;
    margin: unset;
    gap: 3em;
    max-width: 1200px;
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(0px, 200px));
  }

  @media (min-width: 1400px) {
    place-self: center;
  }
`;

export const Header = styled.h2`
  align-self: start;
  margin: 0;
  margin-top: 0.2em;
  margin-left: 0.7rem;
`;

export const Text = styled.p`
  align-self: start;
  margin-top: 0;
  margin-left: 0.7rem;
  margin-bottom: 2em;
  color: var(--accent);
  font-weight: bold;
  font-size: 1.1rem;
`;

export const Image = styled.img`
  max-width: 100%;
`;
