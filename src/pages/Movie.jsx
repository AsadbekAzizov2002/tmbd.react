import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { useEffect, useState } from "react";
import plas from "../assets/plass.svg";
import like from "../assets/like.svg";
import karn from "../assets/karn.svg";
import button2 from "../assets/button2.svg";
import shape from "../assets/Shape.svg";
import button3 from "../assets/button3.svg";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const fetchMovie = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error(error.massage);
    }
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  const [genres, setGenres] = useState([]);
  console.log(genres);
  const fetGenres = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/genre/movie/list`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      });
      if (res.status !== 200) throw new Error("Coul not get genre movie list");
      setGenres(res.data.genres);
    } catch (error) {
      console.error(error.massage);
    }
  };

  useEffect(() => {
    fetGenres();
  }, []);
  return (
    <div className="bg container mx-auto max-w-[1400px]  px-5">
      <div className=" grid grid-cols-6 gap-5">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="container mx-auto items-start sm:w-[390px]   md:w-[700px] md:justify-between lg:w-[1000px]   lg:justify-between">
        <h1 className="mx-auto w-[310px] items-center  justify-center pt-[36px] text-xl text-white	 md:pt-[30px] lg:pt-[40px]  lg:text-3xl">
          Avengers : Endgame
        </h1>
        <p className=" lg:w[900px] sd:hidden font-normal  text-[#999999]">
          With the help of remaining allies, the Avengers must assemble once
          more in order to undo Thanos's actions and undo the chaos to the
          universe, no matter what consequences may be in store, and no matter
          who they face... Avenge the fallen.
        </p>
        <div className="mt-[30px] flex items-center justify-center">
          <button className="mr-5 bg-red-500 py-[14px] pl-[56px] pr-[24px] text-white">
            Play Now
          </button>
          <div>
            <button>
              <img
                className=" mr-[10px] bg-[#262626] p-[21px]"
                src={plas}
                alt="img"
              />
            </button>
            <button>
              <img
                className=" mr-[10px] bg-[#262626] p-[16px]"
                src={like}
                alt=""
              />
            </button>
            <button>
              <img
                className=" bg-[#262626] px-[16px] py-[17px]"
                src={karn}
                alt="img"
              />
            </button>
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-between">
            <img src={button2} alt="span" />
            <span className=" flex gap-1">
              <img src={shape} alt="img" />
              <img src={shape} alt="img" />
              <img src={shape} alt="img" />
            </span>
            <img src={button3} alt="span" />
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <div className=" container md:mb-[60px] md:mt-[200px] md:flex md:w-[1200px] md:justify-between">
            <h2 className=" text-2xl font-bold text-white md:w-[900px]">
              Our Genres
            </h2>
            <button className="sd:hidden items-center gap-2 md:flex">
              <img src={button2} alt="span" />
              <img src={shape} alt="span" />
              <img src={shape} alt="span" />
              <img src={shape} alt="span" />
              <img src={button3} alt="span" />
            </button>
          </div>
          <div className=" md:mb-[100px] md:flex md:gap-[30px]">
            <div className=" w-[275px] ">
              <div className=" mt-[30px] grid h-[350px] w-[305px] grid-cols-10 grid-rows-2 gap-3 md:h-[500px] md:w-[1200px]">
                {movies.map((movie) => (
                  <NavLink to={`/movie/${movie.id}`} key={movie.id}>
                    <div key={movie.id} className=" grid ">
                      <img
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                      />
                    </div>
                  </NavLink>
                ))}
              </div>
              <div className=" flex items-center">
                <h2 className=" w-[180px] font-semibold text-white ">Action</h2>
                <img src={button3} alt="img" />
              </div>
            </div>
          </div>
          <div className=" container md:mb-[60px]  md:flex md:w-[1200px] md:justify-between">
            <h2 className=" text-2xl font-bold text-white md:w-[900px]">
              Our Genres
            </h2>
            <button className="sd:hidden items-center gap-2 md:flex">
              <img src={button2} alt="span" />
              <img src={shape} alt="span" />
              <img src={shape} alt="span" />
              <img src={shape} alt="span" />
              <img src={button3} alt="span" />
            </button>
          </div>
          <div className=" md:mb-[30px]  md:flex md:gap-[30px]">
            <div className=" w-[275px] ">
              <div className=" mt-[30px] grid h-[350px] w-[305px] grid-cols-10 grid-rows-2 gap-3 md:h-[500px] md:w-[1200px]">
                {movies.map((movie) => (
                  <NavLink to={`/movie/${movie.id}`} key={movie.id}>
                    <div key={movie.id} className=" grid ">
                      <img
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                      />
                    </div>
                  </NavLink>
                ))}
              </div>
              <div className=" flex items-center">
                <h2 className=" w-[180px] font-semibold text-white ">Action</h2>
                <img src={button3} alt="img" />
              </div>
            </div>
          </div>
          <div className=" container md:mb-[60px]  md:flex md:w-[1200px] md:justify-between">
            <h2 className=" text-2xl font-bold text-white md:w-[900px]">
              Our Genres
            </h2>
            <button className="sd:hidden items-center gap-2 md:flex">
              <img src={button2} alt="span" />
              <img src={shape} alt="span" />
              <img src={shape} alt="span" />
              <img src={shape} alt="span" />
              <img src={button3} alt="span" />
            </button>
          </div>
          <div className=" md:mb-[30px]  md:flex md:gap-[30px]">
            <div className=" w-[275px] ">
              <div className=" mt-[30px] grid h-[350px] w-[305px] grid-cols-10 grid-rows-2 gap-3 md:h-[500px] md:w-[1200px]">
                {movies.map((movie) => (
                  <NavLink to={`/movie/${movie.id}`} key={movie.id}>
                    <div key={movie.id} className=" grid ">
                      <img
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                      />
                    </div>
                  </NavLink>
                ))}
              </div>
              <div className=" flex items-center">
                <h2 className=" w-[180px] font-semibold text-white ">Action</h2>
                <img src={button3} alt="img" />
              </div>
            </div>
          </div>
          <div className=" container md:mb-[60px]  md:flex md:w-[1200px] md:justify-between">
            <h2 className=" text-2xl font-bold text-white md:w-[900px]">
              Our Genres
            </h2>
            <button className="sd:hidden items-center gap-2 md:flex">
              <img src={button2} alt="span" />
              <img src={shape} alt="span" />
              <img src={shape} alt="span" />
              <img src={shape} alt="span" />
              <img src={button3} alt="span" />
            </button>
          </div>
          <div className=" md:mb-[30px]  md:flex md:gap-[30px]">
            <div className=" w-[275px] ">
              <div className=" mt-[30px] grid h-[350px] w-[305px] grid-cols-10 grid-rows-2 gap-3 md:h-[500px] md:w-[1200px]">
                {movies.map((movie) => (
                  <NavLink to={`/movie/${movie.id}`} key={movie.id}>
                    <div key={movie.id} className=" grid ">
                      <img
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                      />
                    </div>
                  </NavLink>
                ))}
              </div>
              <div className=" flex items-center">
                <h2 className=" w-[180px] font-semibold text-white ">Action</h2>
                <img src={button3} alt="img" />
              </div>
            </div>
          </div>
          <div className=" container md:mb-[60px]  md:flex md:w-[1200px] md:justify-between">
            <h2 className=" text-2xl font-bold text-white md:w-[900px]">
              Our Genres
            </h2>
            <button className="sd:hidden items-center gap-2 md:flex">
              <img src={button2} alt="span" />
              <img src={shape} alt="span" />
              <img src={shape} alt="span" />
              <img src={shape} alt="span" />
              <img src={button3} alt="span" />
            </button>
          </div>
          <div className=" md:mb-[30px]  md:flex md:gap-[30px]">
            <div className=" w-[275px] ">
              <div className=" mt-[30px] grid h-[350px] w-[305px] grid-cols-10 grid-rows-2 gap-3 md:h-[500px] md:w-[1200px]">
                {movies.map((movie) => (
                  <NavLink to={`/movie/${movie.id}`} key={movie.id}>
                    <div key={movie.id} className=" grid ">
                      <img
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                      />
                    </div>
                  </NavLink>
                ))}
              </div>
              <div className=" flex items-center">
                <h2 className=" w-[180px] font-semibold text-white ">Action</h2>
                <img src={button3} alt="img" />
              </div>
            </div>
          </div>
          <div>
            <button className=" rounded bg-red-500 px-6 py-[10px] text-white md:mb-[35px] md:mt-[150px]">
              Shows
            </button>
            <div className=" container md:mb-[60px]  md:flex md:w-[1200px] md:justify-between">
              <h2 className=" text-2xl font-bold text-white md:w-[900px]">
                Our Genres
              </h2>
              <button className="sd:hidden items-center gap-2 md:flex">
                <img src={button2} alt="span" />
                <img src={shape} alt="span" />
                <img src={shape} alt="span" />
                <img src={shape} alt="span" />
                <img src={button3} alt="span" />
              </button>
            </div>
            <div className=" md:mb-[30px]  md:flex md:gap-[30px]">
              <div className=" w-[275px] ">
                <div className=" mt-[30px] grid h-[350px] w-[305px] grid-cols-10 grid-rows-2 gap-3 md:h-[500px] md:w-[1200px]">
                  {movies.map((movie) => (
                    <NavLink to={`/movie/${movie.id}`} key={movie.id}>
                      <div key={movie.id} className=" grid ">
                        <img
                          src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                          alt=""
                        />
                      </div>
                    </NavLink>
                  ))}
                </div>{" "}
                <div className=" flex items-center">
                  <h2 className=" w-[180px] font-semibold text-white ">
                    Action
                  </h2>
                  <img src={button3} alt="img" />
                </div>
              </div>
            </div>
            <div className=" container md:mb-[60px]  md:flex md:w-[1200px] md:justify-between">
              <h2 className=" text-2xl font-bold text-white md:w-[900px]">
                Our Genres
              </h2>
              <button className="sd:hidden items-center gap-2 md:flex">
                <img src={button2} alt="span" />
                <img src={shape} alt="span" />
                <img src={shape} alt="span" />
                <img src={shape} alt="span" />
                <img src={button3} alt="span" />
              </button>
            </div>
            <div className=" md:mb-[30px]  md:flex md:gap-[30px]">
              <div className=" w-[275px] ">
                <div className=" mt-[30px] grid h-[350px] w-[305px] grid-cols-10 grid-rows-2 gap-3 md:h-[500px] md:w-[1200px]">
                  {movies.map((movie) => (
                    <NavLink to={`/movie/${movie.id}`} key={movie.id}>
                      <div key={movie.id} className=" grid ">
                        <img
                          src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                          alt=""
                        />
                      </div>
                    </NavLink>
                  ))}
                </div>
                <div className=" flex items-center">
                  <h2 className=" w-[180px] font-semibold text-white ">
                    Action
                  </h2>
                  <img src={button3} alt="img" />
                </div>
              </div>
            </div>
            <div className=" container md:mb-[60px]  md:flex md:w-[1200px] md:justify-between">
              <h2 className=" text-2xl font-bold text-white md:w-[900px]">
                Our Genres
              </h2>
              <button className="sd:hidden items-center gap-2 md:flex">
                <img src={button2} alt="span" />
                <img src={shape} alt="span" />
                <img src={shape} alt="span" />
                <img src={shape} alt="span" />
                <img src={button3} alt="span" />
              </button>
            </div>
            <div className=" md:mb-[30px]  md:flex md:gap-[30px]">
              
              <div className=" w-[275px] ">
                <div className=" mt-[30px] grid h-[350px] w-[305px] grid-cols-10 grid-rows-2 gap-3 md:h-[500px] md:w-[1200px]">
                  {movies.map((movie) => (
                    <NavLink to={`/movie/${movie.id}`} key={movie.id}>
                      <div key={movie.id} className=" grid ">
                        <img
                          src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                          alt=""
                        />
                      </div>
                    </NavLink>
                  ))}
                </div>
                <div className=" flex items-center">
                  <h2 className=" w-[180px] font-semibold text-white ">
                    Adventure
                  </h2>
                  <img src={button3} alt="img" />
                </div>
              </div>
            </div>
            <div className=" container md:mb-[60px]  md:flex md:w-[1200px] md:justify-between">
              <h2 className=" text-2xl font-bold text-white md:w-[900px]">
                Our Genres
              </h2>
              <button className="sd:hidden items-center gap-2 md:flex">
                <img src={button2} alt="span" />
                <img src={shape} alt="span" />
                <img src={shape} alt="span" />
                <img src={shape} alt="span" />
                <img src={button3} alt="span" />
              </button>
            </div>
            <div className=" md:mb-[30px]  md:flex md:gap-[30px]">
              <div className=" w-[275px] ">
                <div className=" mt-[30px] grid h-[350px] w-[305px] grid-cols-10 grid-rows-2 gap-3 md:h-[500px] md:w-[1200px]">
                  {movies.map((movie) => (
                    <NavLink to={`/movie/${movie.id}`} key={movie.id}>
                      <div key={movie.id} className=" grid ">
                        <img
                          src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                          alt=""
                        />
                      </div>
                    </NavLink>
                  ))}
                </div>
                <div className=" flex items-center">
                  <h2 className=" w-[180px] font-semibold text-white ">
                    Action
                  </h2>
                  <img src={button3} alt="img" />
                </div>
              </div>
            </div>
            <div className=" container md:mb-[60px]  md:flex md:w-[1200px] md:justify-between">
              <h2 className=" text-2xl font-bold text-white md:w-[900px]">
                Our Genres
              </h2>
              <button className="sd:hidden items-center gap-2 md:flex">
                <img src={button2} alt="span" />
                <img src={shape} alt="span" />
                <img src={shape} alt="span" />
                <img src={shape} alt="span" />
                <img src={button3} alt="span" />
              </button>
            </div>
            <div className=" md:mb-[30px]  md:flex md:gap-[30px]">
              <div className=" w-[275px] ">
                <div className=" mt-[30px] grid h-[350px] w-[305px] grid-cols-10 grid-rows-2 gap-3 md:h-[500px] md:w-[1200px]">
                  {movies.map((movie) => (
                    <NavLink to={`/movie/${movie.id}`} key={movie.id}>
                      <div key={movie.id} className=" grid ">
                        <img
                          src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                          alt=""
                        />
                      </div>
                    </NavLink>
                  ))}
                </div>
                <div className=" flex items-center">
                  <h2 className=" w-[180px] font-semibold text-white ">
                    Action
                  </h2>
                  <img src={button3} alt="img" />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      {/* <div className=" container grid grid-cols-4 px-10 lg:w-[1420px]">
        {genres.map((genre) => (
          <div key={genres.id}>
            <h1 className=" text-white">{genre.name}</h1>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Movie;
