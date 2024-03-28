import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe("Testing on authReducer", () => {
  test("should return a default state", () => {
    const initialState = authReducer({ logged: false }, {});

    expect(initialState).toEqual({ logged: false });
  });

  test("should call login an auth and set the user", () => {
    const action = {
      type: types.login,
      payload: {
        name: "Miguel",
        id: "123",
      },
    };

    const testState = authReducer({ logged: false }, action);

    expect(testState).toEqual({ logged: true, user: action.payload });
  });

  test("should call logout, delete username and logged to be in false", () => {
    const initialState = {
      logged: true,
      user: {
        name: "Miguel",
        id: "123",
      },
    };

    const action = {
      type: types.logout,
    };

    const testState = authReducer(initialState, action);

    expect(testState).toEqual({ logged: false });
  });
});
