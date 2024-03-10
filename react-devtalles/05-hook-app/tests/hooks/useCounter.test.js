import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

describe("Pruebas en el useCounter", () => {
  test("Debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());

    const { counter, addToCounter, resetCounter, substractCounter } =
      result.current;

    expect(counter).toBe(10);
    expect(addToCounter).toEqual(expect.any(Function));
    expect(resetCounter).toEqual(expect.any(Function));
    expect(substractCounter).toEqual(expect.any(Function));
  });

  test("Debe de generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));

    const { counter, addToCounter, resetCounter, substractCounter } =
      result.current;

    expect(counter).toBe(100);
    expect(addToCounter).toEqual(expect.any(Function));
    expect(resetCounter).toEqual(expect.any(Function));
    expect(substractCounter).toEqual(expect.any(Function));
  });

  test("Debe de incrementar el contador", () => {
    const { result } = renderHook(() => useCounter());

    const { counter, addToCounter } = result.current;

    act(() => addToCounter());

    expect(result.current.counter).toBe(11);
  });

  test("Debe de decrementar el contador", () => {
    const { result } = renderHook(() => useCounter());

    const { counter, substractCounter } = result.current;

    act(() => substractCounter());

    expect(result.current.counter).toBe(9);
  });

  test("Debe de resetear el contador", () => {
    const { result } = renderHook(() => useCounter());

    const { counter, addToCounter, resetCounter } = result.current;

    act(() => addToCounter(10));

    act(() => resetCounter());

    expect(result.current.counter).toBe(10);
  });
});
