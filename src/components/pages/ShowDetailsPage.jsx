import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Header from "../Header";
import Navbar from "../Navbar";

const ShowDetailsPage = () => {
  let { type, id } = useParams();
  const [data, setData] = useState([]);
  const fetchDetails = async () => {
    try {
      let url = `https://api.themoviedb.org/3/${type}/${id}?api_key=afe7e38e0bb89889a192306f9abb11a5&d`;

      const response = await fetch(url);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <MaxWidthWrapper>
      <Navbar />
      {type === "movie" ? (
        <>
          <Header props={`Here are some details about ${data.title}!`} />
          <div className="flex flex-col">
            <img
              className="w-full h-full rounded-l object-scale-down"
              src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt={data.title}
            />
            <h3 className="font-semibold">
              Release year: {data.release_date.slice(0, 4)}
            </h3>

            <h3 className="mb-3 font-semibold">Overview:</h3>
            <p className="text-left mb-5">{data.overview}</p>
          </div>
        </>
      ) : (
        <>
          <Header props={`Here are some details about ${data.name}!`} />
          <div className="flex flex-col object-scale-down items-center">
            <img
              className="mt-5 mb-3 rounded-l h-160 w-80"
              src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt={data.name}
            />
            <h3 className="flow-root font-semibold my-2">
              Release date: {data.first_air_date}
            </h3>
            <span className="flow-root mb-1 font-semibold">Overview: </span>
            <p className="flow-root text-left mb-5">{data.overview}</p>
          </div>
        </>
      )}
    </MaxWidthWrapper>
  );
};

export default ShowDetailsPage;
