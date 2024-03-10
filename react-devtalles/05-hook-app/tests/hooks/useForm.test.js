import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";
import { act } from "react-dom/test-utils";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "nombre",
    email: "example@mail.com",
  };

  test("Debe de regresar la información por defecto", () => {
    const { result } = renderHook(() => useForm());

    const { formState } = result.current;

    expect(formState).toEqual({});
  });

  test("Debe de regresar la información aportada", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      formState: initialForm,
      handleInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe de cambiar el nombre del formulario", () => {
    const newValue = "Miguel";

    const { result } = renderHook(() => useForm(initialForm));

    const { handleInputChange } = result.current;

    act(() =>
      handleInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      })
    );

    expect(result.current.formState.name).toBe(newValue);
  });

  test("Debe de realizar el reset del formulario", () => {
    const newValue = "Miguel";

    const { result } = renderHook(() => useForm(initialForm));

    const { handleInputChange, onResetForm } = result.current;

    act(() =>
      handleInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      })
    );

    act(() => onResetForm());

    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
