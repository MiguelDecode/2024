import { types } from "../../../src/auth/types/types";

describe("Tests on types.js", () => {
  test("should return [Auth] Login with types.login", () => {
    expect(types.login).toBe("[Auth] Login");
  });

  test("should return [Auth] Logout with types.logout", () => {
    expect(types.logout).toBe("[Auth] Logout");
  });

  test("should return this types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
