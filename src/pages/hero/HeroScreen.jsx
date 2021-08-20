import React, { useMemo } from "react";

import { Redirect, useParams } from "react-router-dom";

import { getHeroById } from "../../helpers/getHeroById";

import { HeroInformation } from "../../components/HeroInformation";

import {
  Card,
  FlexWrapper,
  CardHeading,
  Wrapper,
} from "../../components/Shared/CardStyles";

import { HeroImage } from "../../components/HeroCard/styles";
import { GridContainer } from "./styles";
import { GoBackButton } from "../../components/Shared/buttons";

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) <Redirect to="/" />;

  const { superhero, characters, publisher, alter_ego, first_appearance } =
    hero;

  return (
    <GridContainer>
      <Card mr="1rem" className="animate__animated animate__fadeInLeft">
        <FlexWrapper>
          <HeroImage src={`/heroes/assets/images/${heroId}.jpg`} alt={alter_ego} />

          <Wrapper pd="1rem">
            <CardHeading as="h3">{superhero}</CardHeading>

            <HeroInformation infoTitle="Character" info={characters} />

            <HeroInformation infoTitle="Publisher" info={publisher} />

            <HeroInformation
              infoTitle="First appearance"
              info={first_appearance}
            />

            <GoBackButton as="button" onClick={() => history.goBack()}>
              Go back...
            </GoBackButton>
          </Wrapper>
        </FlexWrapper>
      </Card>
    </GridContainer>
  );
};
