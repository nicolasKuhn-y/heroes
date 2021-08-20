import React from "react";

import { IconContext } from "react-icons";
import { MdMenu } from "react-icons/md";

import { MobileMenuContainer } from "./styles";

export const MobileMenu = ({ setIsOpen, isOpen }) => {
  return (
    <IconContext.Provider value={{ size: "2rem", color: "white" }}>
      <MobileMenuContainer>
        <MdMenu onClick={() => setIsOpen(!isOpen)} />
      </MobileMenuContainer>
    </IconContext.Provider>
  );
};
