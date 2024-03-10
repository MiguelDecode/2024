import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const handleInputChange = ({ target }) => {
    const key = target.name;
    const value = target.value;

    setFormState({ ...formState, [key]: value });
  };

  const handleReset = () => setFormState(initialForm);

  return {
    formState,
    handleInputChange,
    onResetForm: handleReset,
  };
};
