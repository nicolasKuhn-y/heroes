import React from "react";

import { HeroList } from "../../components/HeroList";
import { PageTitle } from "../../components/PageTitle";

export const MarvelScreen = () => {
  return (
    <>
      <PageTitle name="Marvel Screen" />
      <HeroList publisher="marvel comics" />
    </>
  );
};
