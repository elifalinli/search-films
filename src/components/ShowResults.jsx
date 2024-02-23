import React from "react";
import ShowCard from "./ShowCard";
import MaxWidthWrapper from "./MaxWidthWrapper";

const ShowResults = ({ data }) => {

    const sortedByPopularity = data.sort((a,b) => b.vote_average - a.vote_average)
  return (
    <MaxWidthWrapper>
      <div className="my-10 pt-10">
        <div className="rounded-xl border border-gray-900 p-3 sm:p-12 w-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
          {sortedByPopularity.map((film, index) => (
            <ul className="mt-10  p-3 w-full">
              <li key={index}>
                <ShowCard film={film} title={film.original_title}  date={film.release_date} description={film.overview} poster={film.poster_path} />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ShowResults;
