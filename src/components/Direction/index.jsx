import React from "react";

import { NavLinkStyled } from "./styles";

export const Direction = ({ path, pathName }) => (
  
  <NavLinkStyled to={path} activeClassName="selected">
    {pathName}
  </NavLinkStyled>
);

