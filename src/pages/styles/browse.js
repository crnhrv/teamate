import styled from 'styled-components';

export const BrowsePageWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 100px 100px 1fr;
  grid-template-areas:
    'title'
    'sidebar'
    'card';

  @media (min-width: 700px) {
    grid-template-columns: 200px 1fr;
    grid-template-rows: 150px 1fr;
    grid-template-areas:
      '... title'
      'sidebar card';
  }
`;
