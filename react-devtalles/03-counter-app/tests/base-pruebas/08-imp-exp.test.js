import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp.js", () => {
  test("getHerobyId debe retornar un heroe", () => {
    const testId = 5;
    const testHero = {
      id: 5,
      name: "Wolverine",
      owner: "Marvel",
    };

    const hero = getHeroeById(testId);

    expect(testHero).toEqual(hero);
  });

  test("getHerobyId debe retornar undefined si no existe el id", () => {
    const testId = 100;
    const testHero = getHeroeById(testId);

    expect(testHero).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar un array de heroes", () => {
    const testOwner = "DC";
    const testHeroesDC = [
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ];

    const dcHeroes = getHeroesByOwner(testOwner);

    expect(testHeroesDC).toEqual(dcHeroes);
    expect(testHeroesDC).toEqual(
      heroes.filter((hero) => hero.owner === testOwner)
    );
    expect(dcHeroes.length).toBe(3);
  });

  test("getHeroesByOwner debe retornar un array vacio si no hay ningún heroe de esa compañia", () => {
    const testOwner = "Xmen";
    const testHeroesList = getHeroesByOwner(testOwner);

    expect(testHeroesList.length).toBe(0);
  });
});
