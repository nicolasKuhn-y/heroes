import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { NavBar } from "../components/NavBar";

import { MarvelScreen } from "../pages/marvel/MarvelScreen";
import { HeroScreen } from "../pages/hero/HeroScreen";
import { DcScreen } from "../pages/dc/DcScreen";
import { SearchScreen } from "../pages/search/SearchScreen";

import { Main } from "./styles";

export const DashBoardRoutes = () => {
  return (
    <>
      <NavBar />

      <Main>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />

          <Route exact path="/hero/:heroId" component={HeroScreen} />

          <Route exact path="/dc" component={DcScreen} />

          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </Main>
    </>
  );
};
