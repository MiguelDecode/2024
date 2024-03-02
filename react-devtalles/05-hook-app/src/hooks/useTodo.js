import { useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const addNewTodo = (newTodo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: newTodo,
    };

    dispatch(action);
  };

  const removeTodo = (id) => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };

    dispatch(action);
  };

  const changeToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Status Todo",
      payload: id,
    });
  };

  const totalTodos = todos.length;

  const pendingTodos = todos.filter((todo) => !todo.done).length;

  return {
    todos,
    totalTodos,
    pendingTodos,
    addNewTodo,
    removeTodo,
    changeToggleTodo,
  };
};
