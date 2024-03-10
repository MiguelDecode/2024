import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [
    {
      id: 1,
      todo: "Demo Todo",
      done: false,
    },
  ];

  test("Debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test("Debe de añadir un nuevo todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        desc: "Nuevo todo",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("Debe de remover un todo", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test("Debe de cambiar el estado de un todo", () => {
    const action = {
      type: "[TODO] Status Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(1);
    expect(newState[0].done).toBe(!initialState.done);
  });
});


