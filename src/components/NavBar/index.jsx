import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../auth/types/types";

import { Link } from "react-router-dom";
import { Direction } from "../Direction";

import { MobileMenu } from "../MobileMenu";

import {
  Header,
  Navigation,
  LinkContainer,
  MobileLinkWrapper,
  UserName,
} from "./styles";

import { FlexWrapper } from "../Shared/CardStyles";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);

  const handleLogout = () =>
    dispatch({
      type: types.logout,
    });

  const showButton = () => window.innerWidth <= 600 && setIsOpen(false);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <Header>
      <Navigation>
        <FlexWrapper align="center">
          <h2>
            <Link to="/">The Comic show</Link>
          </h2>

          <LinkContainer>
            <Direction path="/marvel" pathName="Marvel" />

            <Direction path="/dc" pathName="Dc" />

            <Direction path="/search" pathName="Search hero" />
          </LinkContainer>
        </FlexWrapper>

        <LinkContainer>
          <UserName>{name}</UserName>

          <Direction path="/login" pathName="Logout" onClick={handleLogout} />
        </LinkContainer>

        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </Navigation>
      {isOpen ? (
        <MobileLinkWrapper>
          <Direction
            path="/marvel"
            pathName="Marvel"
            onClick={() => setIsOpen(false)}
          />

          <Direction
            path="/dc"
            pathName="Dc"
            onClick={() => setIsOpen(false)}
          />

          <Direction
            path="/search"
            pathName="Search hero"
            onClick={() => setIsOpen(false)}
          />

          <Direction path="/login" pathName="Logout" onClick={handleLogout} />
        </MobileLinkWrapper>
      ) : null}
    </Header>
  );
};
