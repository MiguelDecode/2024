import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const focusInput = () => inputRef.current.select();

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
        ref={inputRef}
      />

      <button onClick={focusInput} className="btn btn-primary mt-2">
        Set Focus
      </button>
    </>
  );
};
