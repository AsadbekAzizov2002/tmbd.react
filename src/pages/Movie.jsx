import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { useEffect, useState } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    try {
      const response = await axios.get(`${BASE_URL}movie/popular`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      });
      console.log(response);

      setMovies(response.data.results);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div className="bg container mx-auto max-w-[1400px]  px-5">
      <div className="container mx-auto flex w-[390px] items-start justify-between md:w-[700px] md:justify-between lg:w-[1000]   lg:justify-between">
        <h1 className=" mx-auto w-[310px] items-center	 justify-center text-xl  text-white">
          Avengers : Endgame
        </h1>
      </div>
      <div className=" container grid grid-cols-4 px-10 lg:w-[1420px]">
        {/* {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.poster_path} alt="img" />
            <h2>{movie.orginal_title}</h2>
            <p>{movie.release_date}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Movie;
