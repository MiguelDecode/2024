import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Pruebas en 11-async-await", () => {
  test("getImagen debe de retornar un URL de la imagen", async () => {
    const url = await getImagen();

    expect(typeof url).toBe("string");
  });

  test('getImagen debe retornar un mensaje de error en caso de fallo', async() => { 
    const url = await getImagen();

    expect(url).toBe('No se encontró la imagen')
   })
});



