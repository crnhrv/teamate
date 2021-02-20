import styled from 'styled-components';

export const Title = styled.h1`
  grid-area: title;
  margin-bottom: 1em;
  text-align: center;
  font-size: 2.3rem;
  color: var(--secondary);

  @media (min-width: 900px) {
    margin: ${({ margin }) => margin};
    font-size: 3rem;
    text-align: ${({ align }) => align};
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 0;
`;

export const Accent = styled.span`
  color: var(--accent);
`;
