import React from "react";

import { CardText } from "./styles";

export const HeroInformation = ({ infoTitle, info }) => (
  <CardText>
    {infoTitle}: <b>{info}</b>
  </CardText>
);
