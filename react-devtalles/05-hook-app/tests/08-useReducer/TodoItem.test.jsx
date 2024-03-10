import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("Pruebas en TodoItem", () => {
  const testTodo = {
    id: 1,
    desc: "Test todo",
    done: false,
  };

  const testRemoveTodo = jest.fn();
  const testChangeToggleTodo = jest.fn();

  //   Reset before each test
  beforeEach(() => jest.clearAllMocks());

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<TodoItem todo={testTodo} />);

    expect(container).toMatchSnapshot;
  });

  test("Debe de mostrar el Todo Pendiente de completar", () => {
    render(
      <TodoItem
        todo={testTodo}
        testRemoveTodo={testRemoveTodo}
        changeToggleTodo={testChangeToggleTodo}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center ");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("Debe de mostrar el Todo completado", () => {
    testTodo.done = true;

    render(
      <TodoItem
        todo={testTodo}
        testRemoveTodo={testRemoveTodo}
        changeToggleTodo={testChangeToggleTodo}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-self-center ");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("span debe de llamar al changeToggleTodo cuando se hace doble click", () => {
    render(
      <TodoItem
        todo={testTodo}
        testRemoveTodo={testRemoveTodo}
        changeToggleTodo={testChangeToggleTodo}
      />
    );

    const spanElement = screen.getByLabelText("span");

    fireEvent.doubleClick(spanElement);

    expect(testChangeToggleTodo).toHaveBeenCalled();
    expect(testChangeToggleTodo).toHaveBeenCalledWith(testTodo.id);
  });

  test("button debe de llamar removeTodo", () => {
    render(
      <TodoItem
        todo={testTodo}
        removeTodo={testRemoveTodo}
        changeToggleTodo={testChangeToggleTodo}
      />
    );

    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);

    expect(testRemoveTodo).toHaveBeenCalled();
    expect(testRemoveTodo).toHaveBeenCalledWith(testTodo.id);
  });
});
