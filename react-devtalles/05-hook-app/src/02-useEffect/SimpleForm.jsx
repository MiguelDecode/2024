import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Desconocido",
    email: "example@email.com",
  });

  const { username, email } = formState;

  const handleInputChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setFormState({ ...formState, [key]: value });
  };

  useEffect(() => {
    // console.log("useEffect called!!");
  }, []);

  useEffect(() => {
    // console.log("formState changed!!!");
  }, [formState]);

  useEffect(() => {
    // console.log("email changed!!!");
  }, [formState.email]);

  return (
    <>
      <h1>Simple Form</h1>

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

      {username === "Desconocido" && <Message />}
    </>
  );
};
