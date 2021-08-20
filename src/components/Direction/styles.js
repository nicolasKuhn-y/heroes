import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const NavLinkStyled = styled(NavLink)`
  &.selected {
    
    color: #1B1717;
    font-weight: 700;
    text-decoration: underline wavy;
    transition: color 400ms ease;
  }
`;
