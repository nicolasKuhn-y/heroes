import React, { useMemo } from "react";

import { getHeroesByPublisher } from "../../helpers/getHeroesByPublisher";
import { HeroCard } from "../HeroCard";
import { Grid } from "./styles";



export const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  const heroTemplate = heroes.map((hero) => (
    <HeroCard key={hero.id} {...hero} />
  ));

  return <Grid>{heroTemplate}</Grid>;
};
