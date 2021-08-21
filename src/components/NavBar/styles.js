import styled from "styled-components";

export const Header = styled.header`
  background-color: #ce1212;
  padding: 1rem;

  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

export const LinkContainer = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    margin: 0 1rem;
    font-size: 1.2;
  }
`;

export const MobileLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ce1212;
  margin-top: 1rem;
`;
