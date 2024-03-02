import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, addToCounter, resetCounter, substractCounter } =
    useCounter();

  return (
    <>
      <h1>Counter WithCustom Hook: {counter}</h1>

      <hr />

      <button className="btn btn-primary" onClick={() => addToCounter(2)}>
        +
      </button>
      <button className="btn btn-primary" onClick={resetCounter}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => substractCounter(2)}>
        -
      </button>
    </>
  );
};
