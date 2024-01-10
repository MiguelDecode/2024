import { Link, Outlet } from "react-router-dom";
import Menu from "../Components/Menu";
import { items } from "../data/items";

export default function Home() {
  return (
    <>
      <Menu />
      <h1>Home</h1>

      <section>
        <div>
          {items.map((item) => (
            <Link key={item.id} to={`/contacts/:${item.id}`}>
              {item.name}
            </Link>
          ))}
        </div>
        <Outlet />
      </section>
    </>
  );
}
