import React from "react";

import { NavLinkStyled } from "./styles";

export const Direction = ({ path, pathName, onClick }) => (
  <NavLinkStyled to={path} activeClassName="selected" onClick={onClick}>
    {pathName}
  </NavLinkStyled>
);
