import React, { useContext } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";

import { LoginScreen } from "../pages/login/LoginScreen";

import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);

  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />

          <PrivateRoute
            path="/"
            isUserLogged={logged}
            component={DashBoardRoutes}
          />
        </Switch>
      </>
    </Router>
  );
};
