import React, { useState } from "react";

import Homes from "./pages/Homes";
import Movie from "./pages/Movie";
import { Route, Routes, NavLink } from "react-router-dom";
import Support from "./pages/Support";
import Subscription from "./pages/Subscription";
import Navbar from "./Navbar";
import MoviesOpn from "./pages/MoviesOpn";
import SingleMovie from "./pages/SingleMovie";

const App = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  return (
    <div className="  bg-[#141414]">
      <Navbar setSearchedMovies={setSearchedMovies} />
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/singlemovie" element={<SingleMovie />} />
        <Route
          path="/moviesopn"
          element={<MoviesOpn searchedMovies={searchedMovies} />}
        />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscription />} />
      </Routes>
    </div>
  );
};

export default App;
