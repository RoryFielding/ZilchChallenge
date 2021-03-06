import styled from 'styled-components';

const Cards = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Cards;
