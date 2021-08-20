import React from "react";

import { HeroList } from "../../components/HeroList";
import { PageTitle } from "../../components/PageTitle";

export const DcScreen = () => {
  return (
    <>
      <PageTitle name="Dc Screen" />

      <HeroList publisher="dc comics" />
    </>
  );
};
