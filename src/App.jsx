import React, { useState } from "react";

import Homes from "./pages/Homes";
import Movie from "./pages/Movie";
import { Route, Routes, NavLink } from "react-router-dom";
import Support from "./pages/Support";
import Subscription from "./pages/Subscription";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="  bg-[#141414]">
      <Navbar />
    </div>
  );
};

export default App;
