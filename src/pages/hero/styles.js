import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
