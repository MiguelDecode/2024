import PropTypes from "prop-types";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ addNewTodo }) => {
  const { formState, handleInputChange, onResetForm } = useForm({
    desc: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.length <= 1) return;

    const newTodo = {
      id: crypto.randomUUID(),
      desc: formState.desc,
      done: false,
    };

    addNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        name="desc"
        value={formState.desc}
        onChange={handleInputChange}
      />

      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};

TodoAdd.propTypes = {
  addNewTodo: PropTypes.func,
};
