import React from "react";

import { HeroInformation } from "../HeroInformation";

import { HeroImage } from "./styles";
import { RoundedButton } from "../Shared/buttons";
import { Card, FlexWrapper, CardHeading, Wrapper } from "../Shared/CardStyles";

export const HeroCard = ({ id, superhero, alter_ego, characters }) => {
  return (
    <Card mr="1rem" className="animate__animated animate__fadeInUp">
      <FlexWrapper>
        <HeroImage src={`/heroes/assets/images/${id}.jpg`} alt={alter_ego} />

        <Wrapper pd="1rem">
          <CardHeading as="h3">{superhero}</CardHeading>

          <HeroInformation infoTitle="Alter ego" info={alter_ego} />

          {alter_ego !== characters && (
            <HeroInformation infoTitle="Name" info={characters} />
          )}

          <RoundedButton to={`/hero/${id}`}>More info...</RoundedButton>
        </Wrapper>
      </FlexWrapper>
    </Card>
  );
};
