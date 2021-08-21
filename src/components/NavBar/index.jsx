import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Direction } from "../Direction";

import { MobileMenu } from "../MobileMenu";

import {
  Header,
  Navigation,
  Head,
  LinkContainer,
  MobileLinkWrapper,
} from "./styles";

import { FlexWrapper } from "../Shared/CardStyles";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showButton = () => window.innerWidth <= 600 && setIsOpen(false);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <Header>
      <Navigation>
        <FlexWrapper align="center">
          <Head>
            <Link to="/">The Comic show</Link>
          </Head>

          <LinkContainer>
            <Direction path="/marvel" pathName="Marvel" />

            <Direction path="/dc" pathName="Dc" />

            <Direction path="/search" pathName="Search hero" />
          </LinkContainer>
        </FlexWrapper>

        <LinkContainer>
          <Direction path="/login" pathName="Logout" />
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

          <Direction
            path="/login"
            pathName="Logout"
            onClick={() => setIsOpen(false)}
          />
        </MobileLinkWrapper>
      ) : null}
    </Header>
  );
};
