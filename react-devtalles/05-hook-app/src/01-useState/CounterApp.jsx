import { useState } from "react";

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  //   Care with objects of multiple levels and spread
  const handleAdd = () => {
    setState({ ...state, counter1: counter1 + 1 });
  };

  const handleSubstract = () => {
    setState({ ...state, counter1: counter1 - 1 });
  };

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>

      <hr />

      <button className="btn btn-primary" onClick={handleAdd}>
        +1
      </button>
      <button className="btn btn-primary" onClick={handleSubstract}>
        -1
      </button>
    </>
  );
};
