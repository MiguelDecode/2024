import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);


  const handleInputChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setFormState({ ...formState, [key]: value });
  };

  const handleReset = () => setFormState(initialForm);

  return {
    formState,
    handleInputChange,
    onResetForm: handleReset,
  };
};
