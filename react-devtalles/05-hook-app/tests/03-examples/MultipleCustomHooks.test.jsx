import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch.js");
jest.mock("../../src/hooks/useCounter.js");

const bulbasaurData = {
  id: 1,
  name: "bulbasaur",
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    front_female: null,
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    front_shiny_female: null,
  },
};

describe("Pruebas en MultipleCustomHooks", () => {
  const mockAddToCounter = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    addToCounter: mockAddToCounter,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText("Información de Pokémon"));

    const nextBtn = screen.getByRole("button", { name: "Siguiente" });
    expect(nextBtn).toBeTruthy();

    const prevBtn = screen.getByRole("button", { name: "Anterior" });
    expect(prevBtn).toBeTruthy();
  });

  test("Debe de mostrar la información de un Pokémon", () => {
    useFetch.mockReturnValue({
      data: bulbasaurData,
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(
      screen.getByText(`# ${bulbasaurData.id} - ${bulbasaurData.name}`)
    ).toBeTruthy();
  });

  test("Debe de llamar la función de addToCounter y mostrar la información de Ivysaur", () => {
    useFetch.mockReturnValue({
      data: bulbasaurData,
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextBtn = screen.getByRole("button", { name: "Siguiente" });

    fireEvent.click(nextBtn);

    expect(mockAddToCounter).toHaveBeenCalled();
  });
});
