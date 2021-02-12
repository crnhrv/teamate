import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

export const Image = styled.img`
  position: absolute;
  right: 20%;
  bottom: -10%;
  width: 350px;
  transform: rotate(50deg) scale(2.5);

  @media (min-width: 500px) {
    transform: rotate(50deg) scale(3.5);
  }
`;
