import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en el componente <HomePage/>", () => {
  const testUser = {
    id: 1,
    name: "Name test",
  };

  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preElement = screen.getByLabelText("pre");

    expect(preElement.innerHTML).toBe("null");
  });

  test("Debe de mostrar el componente con el usuario", () => {
    render(
      <UserContext.Provider value={{ user: testUser }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preElement = screen.getByLabelText("pre");

    expect(preElement.innerHTML).toBe(JSON.stringify(testUser, null, 3));
  });

});
