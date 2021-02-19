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

export const Header = styled.h2`
  align-self: center;
  margin: 0;
  margin-top: 0.5em;
  color: var(--secondary);
`;

export const Text = styled.p`
  align-self: center;
  margin-top: 0;
  margin-bottom: 2em;
  color: var(--accent);
  font-weight: bold;
  font-size: 1.1rem;
`;

export const Image = styled.img`
  max-width: 100%;
`;
