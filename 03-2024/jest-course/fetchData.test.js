const fetchData = require("./fetchData");

describe("Tests on fetchData.js", () => {
  test("the data is peanut butter", (done) => {
    function callback(data) {
      try {
        expect(data).toBe("peanut butter");
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchData(callback);
  });
});
