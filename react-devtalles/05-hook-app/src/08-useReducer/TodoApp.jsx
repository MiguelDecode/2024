import { useEffect } from "react";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
  const {
    todos,
    totalTodos,
    pendingTodos,
    addNewTodo,
    removeTodo,
    changeToggleTodo,
  } = useTodo();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  return (
    <>
      <h1>
        TodoApp: {totalTodos}, <small>pendientes: {pendingTodos}</small>
      </h1>

      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            changeToggleTodo={changeToggleTodo}
          />
        </div>

        <div className="col-5">
          <h4>Agredar TODO</h4>

          <hr />

          <TodoAdd addNewTodo={addNewTodo} />
        </div>
      </div>
    </>
  );
};
