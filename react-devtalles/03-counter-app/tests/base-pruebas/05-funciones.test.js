import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("first", () => {
  test("getUser debe de retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe de retornar un object", () => {
    const name = "Miguel";
    const testUser = {
      uid: "ABC567",
      username: name,
    };

    const user = getUsuarioActivo(name);

    expect(testUser).toEqual(user);
  });
});

