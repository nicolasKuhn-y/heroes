import styled from "styled-components";

export const Header = styled.header`
  background-color: #ce1212;
  padding: 1rem;
`;

export const Head = styled.h2`
  display: inline;
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
  position: relative;

  a {
    margin: 0 1rem;
    font-size: 1.2;
  }
`;

export const MobileLinkWrapper = styled.div`
  position: absolute;
  top: 3rem;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: #ce1212;
`;
