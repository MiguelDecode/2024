import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe("Pruebas en el <CounterApp/>", () => {
  const initialValue = 100;

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el valor inicial de 100", () => {
    render(<CounterApp value={initialValue} />);

    expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).textContent).toContain(
      "100"
    );
  });

  test("Debe de incrementar con el botón +1", () => {
    render(<CounterApp value={initialValue} />);

    fireEvent.click(screen.getByText("+1"));

    expect(screen.getByText("+1")).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).textContent).toContain(
      "101"
    );
  });

  test("Debe de decrementar con el botón de -1", () => {
    render(<CounterApp value={initialValue} />);

    fireEvent.click(screen.getByText("-1"));

    expect(screen.getByText("-1")).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).textContent).toContain(
      "99"
    );
  });

  test("Debe de funcionar el botón de reset", () => {
    render(<CounterApp value={initialValue} />);

    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));

    fireEvent.click(screen.getByText("Reset"));

    expect(screen.getByText("Reset")).toBeTruthy();
    expect(screen.getByText("100")).toBeTruthy();
    expect(screen.getByRole("button", { name: "reset" })).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).textContent).toContain(
      "100"
    );
  });
});
