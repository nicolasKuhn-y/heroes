import { heroes } from "../data/heroes";

export const getHeroById = (_id) => heroes.find(({ id }) => id === _id);
