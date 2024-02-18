import PropTypes from "prop-types";
import { useState } from "react";

function CounterApp({ value }) {
  const [counter, setCounter] = useState(value);

  console.log("Render");

  const handleAdd = () => setCounter(counter + 1);
  const handleSubstract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button aria-label="add" onClick={handleAdd}>+1</button>
      <button aria-label="substract" onClick={handleSubstract}>-1</button>
      <button aria-label="reset" id="btn-reset" onClick={handleReset}>Reset</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
