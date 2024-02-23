import React, { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Header from "../Header";
import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import ShowResults from "../ShowResults";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);

  const handleChange = async (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = async () => {
    const inputValue = searchValue.trim().toLowerCase();
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=afe7e38e0bb89889a192306f9abb11a5&d&query=${inputValue}`
      );
      const responseData = await response.json();
      setData(responseData.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MaxWidthWrapper>
      <Navbar />
      <Header props="Welcome!" />
      <SearchBar
        onChange={handleChange}
        onSubmit={handleSearch}
        searchValue={searchValue}
      />
      <ShowResults data={data} />
    </MaxWidthWrapper>
  );
};

export default SearchPage;
