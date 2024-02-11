import "./App.css";
import {
  Link,
  Route,
  Routes,
  useParams,
  Outlet,
} from "react-router-dom";
import { MyNavLink } from "./components/MyNavLink";

const Home = () => <h1>Home</h1>;

const SearchPage = () => {
  const tacos = ["cochinita", "chili", "carnita", "quesadilla", "midutaco"];

  return (
    <section>
      <h1>Search Page</h1>
      <ul>
        {tacos.map((taco) => (
          <li key={taco}>
            <Link to={`/tacos/${taco}`}>{taco}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Tacos = () => {
  const { taco } = useParams();

  return (
    <div>
      <h1>Tacos</h1>
      {taco}
      <Link to="details">Ir a los detalles</Link>
      <Outlet />
    </div>
  );
};

const TacoIndex = () => {
  return <h1>Taco Index de Tacos.</h1>;
};

const TacoDetails = () => {
  const { taco } = useParams();

  return (
    <>
      <h1>Detalles del taco: {taco}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi maiores
        cum unde a molestias ipsa ullam iste laudantium laboriosam corrupti
        expedita enim accusantium aliquam, odio laborum accusamus exercitationem
        aperiam quos.
      </p>
    </>
  );
};

function App() {
  return (
    <>
      <header>
        <h1>miduchollo 💵</h1>
        <nav>
          <ul>
            <li>
              <MyNavLink to="/">Home</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/search-page">Search Page</MyNavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Importante el orden de las rutas ya no importa. Se basa en un algoritmo interno para decidir que ruta va antes en casos de igualdad. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/tacos/:taco" element={<Tacos />}>
          <Route index element={<TacoIndex />} />
          <Route path="details" element={<TacoDetails />}></Route>
        </Route>
        <Route
          path="/tacos/midutaco"
          element={<h1 style={{ color: "red" }}>Midutaco</h1>}
        />
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=iPNt12IdbCU&list=TLPQMTAwMTIwMjSyqF6-_DD4Cg&index=4
// Minuto: 1:21:00
