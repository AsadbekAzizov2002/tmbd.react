import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { useState } from "react";

const Movie = () => {
  const [movie, setMovie] = useState([]);
console.log(movie);
  axios
    .get(`${BASE_URL}movie/popular`, {
      params: {
        api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        include_video: true,
      },
    })
    .then(function (response) {
      setMovie(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  return <div></div>;
};

export default Movie;
