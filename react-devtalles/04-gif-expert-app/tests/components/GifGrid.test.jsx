import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en GifGrid", () => {
  const testCategory = "One Punch";

  test("Debe de mostrar el loading inicialmente ", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={testCategory} />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(testCategory));
  });

  test("Debe de mostrar items cuando se cargan las imágenes mediante el useFetchGifs", () => {
    const gifs = [
      {
        id: "idTest",
        title: "TestTitle",
        url: "https://test.jpg",
      },
      {
        id: "idTest2",
        title: "TestTitle2",
        url: "https://test2.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={testCategory} />);
    expect(screen.getByText("TestTitle"));
    expect(screen.getByText("TestTitle2"));
    expect(screen.getAllByRole("img").length).toBe(2);
  });

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GifGrid category={testCategory} />);

    expect(container).toMatchSnapshot();
  });
});

