import styled from 'styled-components';

export const Container = styled.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5em;
  margin-bottom: 2em;

  @media (min-width: 700px) {
    position: relative;
    flex-direction: column;
    justify-content: start;
    align-self: start;
    gap: 0em;

    &::after {
      content: '';
      position: absolute;
      top: 25%;
      left: 75%;
      width: 10px;
      height: 50%;
      border-right: 10px solid var(--accent);
      margin-right: 3em;
    }
  }
`;

export const Item = styled.p`
  font-size: 1.2rem;
  color: ${({ active }) => (active ? 'var(--accent)' : 'var(--secondary)')};
  font-weight: ${({ active }) => (active ? 'bold' : 'regular')};
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    color: ${({ active }) => (active ? 'var(--accent)' : 'var(--hover)')};
  }

  @media (min-width: 700px) {
    font-size: 2rem;
    margin-bottom: 0.5em;
  }
`;
