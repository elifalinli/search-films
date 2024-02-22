import React, { useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import MaxWidthWrapper from "./MaxWidthWrapper";

const SearchBar = () => {
  const searchInputRef = useRef(null);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (

      <form
        onSubmit={() => {}}
        className="flex mt-10 w-full max-w-md border border-gray-900 rounded-md space-x-2"
      >
        <input
          ref={searchInputRef}
          type="search"
          placeholder="Enter a movie/tv show"
          className="w-full px-6 py-3 grow"
        />
        <button type="submit" className="px-2 ">
          <CiSearch />
        </button>
      </form>

  );
};

export default SearchBar;
