import styled from "styled-components";

export const MobileMenuContainer = styled.div`
  display: flex;

  & > svg {
    cursor: pointer;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;
