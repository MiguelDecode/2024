import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs", () => {
  const testCategory = "One Punch";

  test("Debe retornar un gif", async () => {
    const gifs = await getGifs(testCategory);

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toHaveProperty("id", "title", "url");
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
