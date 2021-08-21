import React from "react";

import { IconContext } from "react-icons";
import { MdMenu, MdClose } from "react-icons/md";

import { MobileMenuContainer } from "./styles";

export const MobileMenu = ({ setIsOpen, isOpen }) => {
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <IconContext.Provider value={{ size: "2rem", color: "white" }}>
      <MobileMenuContainer>
        {isOpen 
          ? <MdClose onClick={handleOpen} />
          : <MdMenu onClick={handleOpen} />
        }
      </MobileMenuContainer>
    </IconContext.Provider>
  );
};
