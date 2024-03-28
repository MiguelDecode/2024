const fetchPromise = require("./fetchPromise");

describe("Tests on file fetchPromise", () => {
  test("The fetch work fine and return peanut butter", () => {
    expect(fetchPromise(1000)).resolves.toBe("peanut butter");
  });

  test("The fetch fails with an error", () => {
    expect(fetchPromise()).rejects.toThrow("error");
  });
});
