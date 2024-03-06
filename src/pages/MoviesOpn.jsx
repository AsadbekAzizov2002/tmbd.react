import React from "react";
import { NavLink } from "react-router-dom";

const MoviesOpn = ({ searchedMovies }) => {
  console.log(searchedMovies);
  return (
    <div>
      {searchedMovies.map((movie) => (
        <NavLink to={`/movie/${movie.id}`} key={movie.id}>
          <div>
            <img
              src={`https:media.themoviedb.org/t/p/w200_and_h330_face/${movie.poster_path}`}
              alt="img"
            />
            <h2>{movie.orginal_title}</h2>
            <p>{movie.release_date}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default MoviesOpn;
