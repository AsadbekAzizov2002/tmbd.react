import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

const Shous = () => {
  const [genres, setGenres] = useState([]);
  const fetGenres = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/genre/movie/list`, {
        parama: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      });
      if (res.status !== 200) throw new Error("Could not get movie list ");
      setGenres(res.data.genres);
    } catch (error) {
      console.error(error.massage);
    }
  };
  useEffect(() => {
    fetGenres();
  }, []);
  return (
    <div>
      {genres.map((genre) => (
        <h1>{genre.name}</h1>
      ))}
    </div>
  );
};

export default Shous;
