import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo.js");

describe("Pruebas en TodoApp", () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, desc: "Todo #1", done: false },
      { id: 2, desc: "Todo #2", done: true },
    ],
    totalTodos: 2,
    pendingTodos: 1,
    addNewTodo: jest.fn(),
    removeTodo: jest.fn(),
    changeToggleTodo: jest.fn(),
  });

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<TodoApp />);

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostar el componente correctamente", () => {
    render(<TodoApp />);

    expect(screen.getByText("Todo #1")).toBeTruthy();
    expect(screen.getByText("Todo #2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
