import React, { useRef, useEffect } from "react";

import SearchButton from "./SearchButton";

const SearchBar = ({ searchValue, onSubmit, onChange }) => {
  const searchInputRef = useRef(null);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex mt-10 w-full max-w-md border border-gray-900 rounded-md space-x-2"
      >
        <input
          ref={searchInputRef}
          type="search"
          placeholder="Enter a movie/tv show"
          className="w-full px-6 py-3 grow"
          value={searchValue}
          onChange={onChange}
        />
        <SearchButton />
      </form>
    </div>
  );
};

export default SearchBar;
