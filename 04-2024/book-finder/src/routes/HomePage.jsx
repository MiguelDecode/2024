import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default HomePage;
