import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync debe de retornar un héroe", (done) => {
    const id = 1;

    const testHero = {
      id: 1,
      name: "Batman",
      owner: "DC",
    };

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual(testHero);
      done();
    });
  });

  test("getHeroByIdAsync debe retornar un mensaje de error si no se encuentra el id", (done) => {
    const id = 99;
    const msg = "No se pudo encontrar el héroe";

    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        console.log(error);
        expect(error).toBe(`${msg}: ${id}`);

        done();
      });
  });
});
