import SearchForm from "./SearchForm";

const Navbar = () => {
  return (
    <nav className="p-4">
      <ul className="flex justify-between items-center mx-auto max-w-5xl">
        <li>
          <a href="/" className="flex items-center gap-2">
            <img
              src="/src/assets/images/astral-logo.svg"
              alt="Brand Logo"
              className="w-8"
            />
            <h1>
              <span className="font-bold">Astral</span> Books
            </h1>
          </a>
        </li>
        <li>
          <SearchForm />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
