import { evaluate } from "mathjs";
import { useRef, useState } from "react";

export const Calculator = () => {
  const [value, setValue] = useState("");

  const inputRef = useRef(null);

  const handleButton = (sign) => setValue(value.concat(sign));

  const handleResult = () => {
    const result = evaluate(value);
    setValue(String(result));
  };

  const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];

  const operations = ["+", "-", "*", "/"];

  const equalSign = "=";

  return (
    <section>
      <h1>Calculator</h1>

      <input ref={inputRef} type="text" value={value} readOnly />

      <div role="grid">
        {rows.map((row, index) => (
          <div key={index} role="row">
            {row.map((num) => (
              <button onClick={() => handleButton(num)} key={num}>
                {num}
              </button>
            ))}
          </div>
        ))}

        {operations.map((operation) => (
          <button key={operation} onClick={() => handleButton(operation)}>
            {operation}
          </button>
        ))}

        <button onClick={handleResult}>{equalSign}</button>
      </div>
    </section>
  );
};
