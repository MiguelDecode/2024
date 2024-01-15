import { memo, useMemo } from "react";

const ContadorHijo = ({ contador, add, substract }) => {
  /* Proceso pesado que ralentiza el renderizado
   let superNumero = 0;

  for (let i = 0; i < 1000000000; i++) {
    superNumero++;
  } */

  const superNumber = useMemo(() => {
    let numero = 0;

    for (let i = 0; i < 1000000000; i++) {
      numero++;
    }

    return numero;
  }, []);

  console.log("Hijo contador se renderiza.");

  return (
    <div style={{ border: "thin solid #000", margin: "1rem", padding: "1rem" }}>
      <h2>Hijo del Contador</h2>
      <nav>
        <button onClick={add}>+</button>
        <button onClick={substract}>-</button>
      </nav>
      <h3>{contador}</h3>
      <h3>{superNumber}</h3>
    </div>
  );
};

export default memo(ContadorHijo);
