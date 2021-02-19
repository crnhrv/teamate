import styled from 'styled-components';

export const Title = styled.h1`
  grid-area: title;
  margin-bottom: 1em;
  text-align: center;
  font-size: 2.3rem;
  color: var(--secondary);

  @media (min-width: 900px) {
    font-size: 3rem;
    text-align: center;
  }
`;

export const Subtitle = styled.p``;

export const Accent = styled.span`
  color: var(--accent);
`;
