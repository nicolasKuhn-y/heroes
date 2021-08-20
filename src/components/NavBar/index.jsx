import React, { useState } from "react";

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

        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        <LinkContainer>
          <Direction path="/login" pathName="Logout" />
        </LinkContainer>

        {isOpen ? (
          <MobileLinkWrapper>
            <Direction path="/marvel" pathName="Marvel" />

            <Direction path="/dc" pathName="Dc" />

            <Direction path="/search" pathName="Search hero" />
          </MobileLinkWrapper>
        ) : null}
      </Navigation>
    </Header>
  );
};
