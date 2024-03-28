const fetchAsyncPromise = require("./fetchAsyncPromise.js");

describe("Tests on file fetchAsyncPromise", () => {
  test("The fetch works fine and return peanut butter", async () => {
    const data = await fetchAsyncPromise();
    expect(data).toBe("peanut butter");
  });
});
