import "./App.css";
import Contador from "./assets/components/Contador";

function App() {
  return (
    <>
      <h1>Memorización en React</h1>
      <a
        href="https://react.dev/blog/2023/03/16/introducing-react-dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Documentación
      </a>

      <hr />

      <h2>Teoría</h2>

      <hr />

      <h3>Memo</h3>
      <Contador />
      <a
        href="https://react.dev/reference/react/memo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Memo Documentation
      </a>

      <ul>
        <li>Se encarga de memorizar un componente</li>
        <li>
          Lo vuelve a renderizar al momento de que sus <b>props</b> cambian.
        </li>
        <li>Evita re-renderizados</li>
        <li>
          Hay que evitarlo en la medida de lo posible, pues podría ser más
          costosa la tarea de memorización que el re-renderizado del componente.
        </li>
        <li>
          Úsalo cuando:
          <ul>
            <li>Tenemos muchos elementos renderizados en una lista.</li>
            <li>Llamamos datos de una API.</li>
            <li>Un componente se vuelve muy pesado.</li>
            <li>Salen alertas de rendimiento en la consola.</li>
          </ul>
        </li>
      </ul>

      <hr />

      <h3>useCallback</h3>
      <a
        href="https://react.dev/reference/react/useCallback"
        target="_blank"
        rel="noopener noreferrer"
      >
        useCallback Documentation
      </a>

      <ul>
        <li>
          Memoriza una función, para no volverla a definir en cada render.
        </li>
        <li>
          Úsalo siempre que se pase una función como <b>prop</b> a un componente
          memorizado.
        </li>
        <li>
          Úsalo siempre que se pase una función como parámetro de un efecto
        </li>
      </ul>

      <hr />

      <h3>useMemo</h3>
      <a
        href="https://react.dev/reference/react/useMemo"
        target="_blank"
        rel="noopener noreferrer"
      >
        useMemo Documentation
      </a>

      <ul>
        <li>
          Memoriza un valor calculado, es decir, el resultado de una función.
        </li>
        <li>Genera propiedades computadas.</li>
        <li>Úsalo en procesos pesados.</li>
      </ul>
    </>
  );
}

export default App;
