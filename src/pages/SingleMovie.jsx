import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constants/constants";

const SingleMovie = () => {
  const params = useParams();

  const [sengilMovie, setSengilMovie] = useState({});
  console.log(sengilMovie);
  const fetchMovie = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${params.id}`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      });
      setSengilMovie(response.data);
    } catch (error) {
      console.error(error.massage);
    }
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div>
      <img
        src={`https://media.themoviedb.org/t/pw220_and_h330_face/${SingleMovie.poster_path}`}
        alt=""
      />
      <h2>{SingleMovie.orginal_title}</h2>
      <p>{SingleMovie.release_date}</p>
    </div>
  );
};

export default SingleMovie;
