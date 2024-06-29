import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <div>
      <header>
        <Navbar />
        <div>
          <h2>Find your book of choice.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            totam voluptates explicabo, aperiam rerum molestias ipsa animi
            placeat beatae exercitationem enim soluta voluptate minima. Nostrum
            placeat sunt reiciendis nisi hic.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
