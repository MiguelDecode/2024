import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en componente <LoginPage/>", () => {
  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preElement = screen.getByLabelText("pre");

    expect(preElement.innerHTML).toBe("null");
  });

  test("Debe de llamar al setUser cuando se hace click en el botón", () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const btnElement = screen.getByRole("button");
    fireEvent.click(btnElement);

    expect(setUserMock).toHaveBeenCalled();
    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: "Miguel",
      email: "example@email.com",
    });
  });
});
