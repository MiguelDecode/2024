const SearchForm = () => {
  return (
    <form className="flex items-center gap-2 border rounded px-2 py-1">
      <img
        src="/src/assets/images/search.svg"
        alt="Search icon"
        className="w-6"
      />
      <input
        className="overflow-hidden"
        type="search"
        placeholder="Search for the book you want an read it now... Jules Verne, George Orw..."
      />
    </form>
  );
};

export default SearchForm;
