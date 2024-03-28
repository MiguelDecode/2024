const sum = require("./sum");

describe("Test function sum", () => {
  test("1 + 2 to be 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("two plus two is four", () => {
    expect(2 * 2).toBe(4);
  });

  test("object assignment", () => {
    const data = { one: 1 };

    data["two"] = 2;

    expect(data).toEqual({ one: 1, two: 2 });
  });

  test("null is falsy", () => {
    const n = null;
    expect(n).toBeFalsy();
  });

  test("something is truthy", () => {
    const n = 1;
    expect(n).toBeTruthy();
  });

  test("throws on invalid input", () => {
    expect(() => sum("hello", 3)).toThrow("hello or 3 aren't numbers");
  });
});
