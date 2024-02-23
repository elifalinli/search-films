import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import ShowResults from "./ShowResults";
import MaxWidthWrapper from "./MaxWidthWrapper";


const URL_SEARCH = "https://api.themoviedb.org/3/search/movie?query=";

const SearchButton = ({handleClick}) => {
  
  
  return (
    <button className="px-2 " >
      <CiSearch />
    </button>
  );
};

export default SearchButton;
