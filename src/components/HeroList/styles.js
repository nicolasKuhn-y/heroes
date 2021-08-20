import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 35rem) and (max-width: 64rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 64rem) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
