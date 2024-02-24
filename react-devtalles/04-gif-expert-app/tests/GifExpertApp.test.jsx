import { fireEvent, render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";
import { AddCategory } from "../src/components";

describe("Pruebas en GifExpertApp", () => {
  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
  });

  test("Debe contener el título de la aplicación", () => {
    render(<GifExpertApp />);

    expect(screen.getByText("GifExpertApp")).toBeTruthy();
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      "GifExpertApp"
    );
  });

  test("No debe agregar nada en caso de no introducir ninguna categoría", () => {
    //! TODO: Revisar método mas adelante no funciona correctamente.
    const testInput = "";
    render(<GifExpertApp />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: testInput } });
    fireEvent.submit(form);

    screen.debug();
  });
});
