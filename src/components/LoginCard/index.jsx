import React, { useContext } from "react";

import { AuthContext } from "../../auth/AuthContext";

import { LoginCardContainer } from "./styles";
import { Card, CardHeading, Wrapper } from "../Shared/CardStyles";
import { LoginButton } from "../Shared/buttons";
import { types } from "../../auth/types/types";

export const LoginCard = () => {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    

    dispatch({
      type: types.login,
      payload: {
        name: "Nicolas",
      },
    });
  };

  return (
    <LoginCardContainer>
      <Card mxWidth="22rem">
        <Wrapper pd="1.5rem">
          <CardHeading as="h3">Welcome to The Comic show</CardHeading>

          <p>
            Here you can find information about some of the most important
            heroes of Dc and Marvel comics.
          </p>
        </Wrapper>
        <LoginButton to="/" onClick={handleLogin}>
          Login
        </LoginButton>
      </Card>
    </LoginCardContainer>
  );
};
