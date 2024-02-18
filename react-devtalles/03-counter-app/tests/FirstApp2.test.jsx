import { getAllByText, render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Prueba en < FirstApp />", () => {
  const title = "Hola, soy Goku.";
  const subtitle = "Soy un subtítulo";

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el mensaje "Hola, soy Goku"', () => {
    render(<FirstApp title={title} />);

    // screen.debug();

    expect(screen.getByText).toBeTruthy();
  });

  test("Debe de mostrar el título en un h1", () => {
    render(<FirstApp title={title} />);

    expect(screen.getByRole("heading", { level: 1 }).textContent).toContain(
      title
    );
  });

  test("Debe de mostrar el subtítulo enviado por props", () => {
    render(<FirstApp title={title} subTitle={subtitle} />);

    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
