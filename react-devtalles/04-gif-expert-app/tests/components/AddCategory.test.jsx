import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en AddCategory", () => {
  const inputTest = "Saitama";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<AddCategory addCategory={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory addCategory={() => {}} />);

    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: inputTest } });

    expect(input.value).toBe(inputTest);
  });

  test("Debe de llamar addCategory si el input tiene un valor", () => {
    const addCategory = jest.fn();

    render(<AddCategory addCategory={addCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputTest } });
    fireEvent.submit(form);

    expect(input.value).toBe("");

    expect(addCategory).toHaveBeenCalled();
    expect(addCategory).toHaveBeenCalledTimes(1);
    expect(addCategory).toHaveBeenCalledWith(inputTest);
  });
});
