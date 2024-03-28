// import { heroes } from "./data/heroes";

import heroes, { owners } from "../data/heroes";
// import { heroes, owners } from "./data/heroes";

export const getHerobyId = (id) => heroes.find((hero) => hero.id === id);

// console.log(getHerobyId(2));

export const getHerobyOwner = (owner) => heroes.filter((hero) => hero.owner === owner);

const heroesMarvel = getHerobyOwner("Marvel");
// console.log(heroesMarvel);

const heroesDC = getHerobyOwner("DC");
// console.log(heroesDC);

// console.log(owners);
