import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import { Form } from "../../components/Form";

import { getHeroByName } from "../../helpers/getHeroByName";

import { Wrapper } from "../../components/Shared/CardStyles";
import { HeroCard } from "../../components/HeroCard";
import { GridContainer } from "../../pages/hero/styles";

export const SearchScreen = ({ history }) => {
  const { q: heroName } = queryString.parse(useLocation().search);

  const heroesFiltered = useMemo(() => getHeroByName(heroName), [heroName]);

  return (
    <Wrapper>
      <Form history={history} />
      <GridContainer>
        {heroesFiltered.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </GridContainer>
    </Wrapper>
  );
};
