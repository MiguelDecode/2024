import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const mockForm = {
    username: "",
    email: "",
    password: "",
  };

  const { formState, handleInputChange, handleReset } = useForm(mockForm);

  const { username, email, password } = formState;

  return (
    <>
      <h1>Form with Custom Hook</h1>

      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="example@email.com"
        name="email"
        value={email}
        onChange={handleInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={handleInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};
