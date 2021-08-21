import React from "react";

import PropTypes from "prop-types";

import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({
  isUserLogged,
  component: Component,
  ...rest
}) => {
  localStorage.setItem("lastScreenVisited", rest.location.pathname);

  return (
    <Route
      {...rest}
      component={(props) =>
        isUserLogged ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
