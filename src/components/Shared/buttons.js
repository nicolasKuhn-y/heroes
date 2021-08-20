import styled from "styled-components";

import { Link } from "react-router-dom";

export const LoginButton = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  background-color: #ff2626;
  color: #f9f9f9;
  transition: background-color 350ms ease-in;

  &:hover {
    background-color: hsl(0, 100%, 40%);
  }
`;

export const RoundedButton = styled(LoginButton)`
  border-radius: 0.3rem;
`;

export const GoBackButton = styled(RoundedButton)`
  cursor: pointer;
  align-self: flex-end;
`;
