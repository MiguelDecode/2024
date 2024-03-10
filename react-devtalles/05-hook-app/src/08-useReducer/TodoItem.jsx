import PropTypes from "prop-types";

export const TodoItem = ({ todo, removeTodo, changeToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        aria-label="span"
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onDoubleClick={() => changeToggleTodo(todo.id)}
      >
        {todo.desc}
      </span>
      <button className="btn btn-danger" onClick={() => removeTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object,
  removeTodo: PropTypes.func,
  changeToggleTodo: PropTypes.func,
};
