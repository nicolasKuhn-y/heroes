import React, { useReducer, useEffect } from "react";

import { authReducer } from "../../auth/authReducer";
import { AuthContext } from "../../auth/AuthContext";

import { GlobalStyle } from "./globalStyles";

import { AppRouter } from "../../routers/AppRouter";

const init = () =>
  JSON.parse(localStorage.getItem("user")) || { logged: false };

export const App = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => localStorage.setItem("user", JSON.stringify(user)), [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <GlobalStyle />
      <AppRouter />
    </AuthContext.Provider>
  );
};
