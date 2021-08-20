import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (_publisher) => {
  const formattedPublisher = _publisher.toLowerCase();

  const publishers = ["dc comics", "marvel comics"];

  if (!publishers.includes(formattedPublisher)) {
    throw new Error("The publisher doesnt's exists");
  }

  return heroes.filter(
    ({ publisher }) => publisher.toLowerCase() === formattedPublisher
  );
};
