import React from "react";

import { GlobalStyle } from "./globalStyles";

import { AppRouter } from "../../routers/AppRouter";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
};
