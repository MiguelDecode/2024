import { useCallback, useState } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");

  const add = useCallback(() => setContador(contador + 1), [contador]);
  const substract = useCallback(() => setContador(contador - 1), [contador]);

  // const add = () => setContador(contador + 1);
  // const substract = () => setContador(contador - 1);

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador</h2>
      <nav>
        <button onClick={add}>+</button>
        <button onClick={substract}>-</button>
      </nav>
      <h3>{contador}</h3>
      <input type="text" onChange={handleInput} value={input} />
      <ContadorHijo contador={contador} add={add} substract={substract} />
    </div>
  );
};

export default Contador;
