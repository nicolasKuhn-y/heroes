import { types } from "./types/types";

export const authReducer = (state = {}, { type, payload }) => {
  const { login, logout } = types;

  switch (type) {
    case login:
      return {
        ...payload,
        logged: true,
      };

    case logout:
      return {
        logged: false,
      };

    default:
      return state;
  }
};
