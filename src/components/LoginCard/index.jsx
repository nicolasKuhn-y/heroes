import React from "react";

import { LoginCardContainer } from "./styles";
import { Card, CardHeading, Wrapper } from "../Shared/CardStyles";
import { LoginButton } from "../Shared/buttons";

export const LoginCard = () => {
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
        <LoginButton to="/"> Login</LoginButton>
      </Card>
    </LoginCardContainer>
  );
};
