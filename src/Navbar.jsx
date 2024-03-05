import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/Logo.png";
import vektor from "./assets/vector2.svg";
import button from "./assets/Button.svg";
import Homes from "./pages/Homes";
import Movie from "./pages/Movie";
import Support from "./pages/Support";
import Subscription from "./pages/Subscription";
import { Route, Routes } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className=" container mx-auto w-[1360px] bg-[#141414] px-5">
        <div className="container flex w-[390px] items-start justify-between md:w-[700px] md:justify-between lg:w-[1000]   lg:justify-between">
          <img className="lg:mr-[200px]" src={logo} alt="logo" />
          <div className="sm:hidden md:hidden lg:flex">
            <nav className=" ">
              <ul className="md:text-hidden flex gap-7 space-x-3 rounded-md border-black bg-[#0F0F0F] pl-[10px] pr-10 text-white sm:hidden md:flex">
                <li className="cursor-pointer py-6 hover:text-amber-400 active:text-blue-500">
                  <NavLink to="/">Home</NavLink>
                </li>

                <li className="cursor-pointer py-6 hover:text-amber-400 active:text-blue-500">
                  <NavLink to="/movies">Movies</NavLink>
                </li>
                <li className="cursor-pointer py-6 hover:text-amber-400 active:text-blue-500">
                  <NavLink to="/support">Support</NavLink>
                </li>
                <li className="cursor-pointer py-6 hover:text-amber-400 active:text-blue-500">
                  <NavLink to="/subscriptions">Subscriptions</NavLink>
                </li>
              </ul>
            </nav>
            <input
              className="gap-3 rounded bg-inherit p-4 text-white"
              type="search"
              name="search"
              id="search"
              placeholder="search ...."
            />
          </div>

          <div className="gap-4 sm:hidden md:flex">
            <img src={vektor} alt="icon" />
          </div>
          <div className=" sm:block md:hidden">
            <img src={button} alt="img" />
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscription />} />
      </Routes>
    </div>
  );
};

export default Navbar;
