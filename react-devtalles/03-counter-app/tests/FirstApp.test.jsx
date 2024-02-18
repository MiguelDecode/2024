import { getByTestId, render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Prueba en < FirstApp />", () => {
  test("Debe de hacer match con el snapshot", () => {
    const title = "Hola, Soy Goku";

    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el título en un h1", () => {
    const title = "Hola, Soy Trunks";
    const id = "test-title";

    const { getByText, getByTestId } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.textContent).toBe(title);
    // expect(h1.textContent).toContain(title);

    expect(getByTestId(id)).toBeTruthy();
    expect(getByTestId(id).textContent).toBe(title);
    expect(getByTestId(id).textContent).toContain(title);
  });

  test("Debe de mostrar el subtítulo enviado por props", () => {
    const title = "Hola, Soy Trunks";
    const subtitle = "Soy un subtítulo";

    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subtitle} />
    );

    expect(getAllByText(subtitle).length).toBe(2);
  });
});
