import React from "react";

import { Link } from "react-router-dom";
import { Direction } from "../Direction";

import { Header, Navigation, Head } from "./styles";

export const NavBar = () => {
  return (
    <Header>
      <Navigation>
        <div>
          <Head>
            <Link to="/">The Comic show</Link>
          </Head>

          <Direction path="/marvel" pathName="Marvel" />

          <Direction path="/dc" pathName="Dc" />

          <Direction path="/search" pathName="Search hero" />
        </div>

        <div>
          <Direction path="/login" pathName="Logout" />
        </div>
      </Navigation>
    </Header>
  );
};
