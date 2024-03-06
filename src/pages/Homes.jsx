import axios from "axios";
import button2 from "../assets/button2.svg";
import button3 from "../assets/button3.svg";
import shape from "../assets/Shape.svg";
import xomeIcon from "../assets/xome_icon.svg";
import xome_Icon2 from "../assets/xome_Icon2.svg";
import xome_Icon3 from "../assets/xome_Icon3.svg";
import xome_Icon4 from "../assets/xome_Icon4.svg";
import xome_Icon5 from "../assets/xome_Icon5.svg";
import xome_Icon6 from "../assets/xome_Icon6.svg";

import Footer from "../Footer";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";

const Homes = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const fetchMovie = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/popular`, {
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
  return (
    <div>
      <div className=" container mx-auto max-w-[1400px] px-5 ">
        <div className=" header container w-[365px] bg-[#141414] bg-[url('../assets/sub.png')] bg-cover bg-no-repeat px-5 md:w-[1100px] ">
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
          <div className="h sm:pt-[200px] md:w-[1000px] md:pt-[100px]">
            <h1 className=" xl:mt[191px] cl:flex text-center	 text-white md:text-base xl:ml-auto xl:mr-auto xl:w-[1096px] xl:justify-center xl:text-6xl  xl:font-bold">
              The Best Streaming Experience
            </h1>
            <p className=" md:justifiy-center ml-auto mr-auto mt-[14px]	 font-normal text-[#999999] sm:mb-[82px] sm:h-[63px] sm:w-[390px]	 sm:justify-center sm:text-sm md:mb-10  md:flex md:text-center lg:mb-[30px] lg:h-[63px] lg:w-[940px]	 lg:text-center lg:text-sm xl:w-[1096px] xl:text-lg">
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </p>
            <button className=" ml-auto mr-auto mt-[30px] block justify-center bg-[#E60000] py-[18.5px] pl-[56px] pr-[14px] text-center text-white sm:mb-[150px] sm:mt-[30px] md:mb-[150px] md:mt-[30px] xl:mb-[200px] ">
              Start Watching Now
            </button>
          </div>
          <div className=" sm:h-[413px] md:h-[418px] lg:h-[520px]">
            <div className=" container lg:flex">
              <div>
                <h1 className=" font-bold	 text-white xl:w-[1040px] xl:text-3xl">
                  Explore our wide variety of categories
                </h1>
                <p className="text-white lg:w-[1024px] ">
                  Whether you're looking for a comedy to make you laugh, a drama
                  to make you think, or a documentary to learn something new
                </p>
              </div>
              <div className=" container sm:hidden md:hidden lg:flex xl:block xl:items-center">
                <button className=" flex items-center gap-2">
                  <img src={button2} alt="span" />
                  <img src={shape} alt="span" />
                  <img src={shape} alt="span" />
                  <img src={shape} alt="span" />
                  <img src={button3} alt="span" />
                </button>
              </div>
            </div>
            <div className=" grid grid-cols-1">
              <div className=" p-5 ">
                <div className=" mt-[30px] grid h-[350px] w-[305px] grid-cols-10 grid-rows-2 gap-3 md:h-[500px] md:w-[1200px]">
                  {movies.map((movie) => (
                    <div key={movie.id} className=" grid ">
                      <img
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className=" "></div>
            </div>
          </div>
          <div className=" mt-[30px] md:flex md:items-center md:justify-between">
            <div>
              <h1 className=" font-bold text-white sm:w-[361px] sm:text-xl md:mb-[10px] md:w-[900px] md:text-2xl	">
                We Provide you streaming experience across various devices.
              </h1>
              <p className=" font-normal text-[#999999] sm:mb-10 sm:w-[361px] md:w-[800px] lg:w-[1000px]">
                With StreamVibe, you can enjoy your favorite movies and TV shows
                anytime, anywhere. Our platform is designed to be compatible
                with a wide range of devices, ensuring that you never miss a
                moment of entertainment.
              </p>
              <div className=" container p-[5px] md:flex	 md:flex-wrap md:gap-[30px]">
                <div className="mb-[20px] mt-10 w-[361px] bg-[#262626] p-10">
                  <div className=" flex w-[361px] items-center gap-[10px]">
                    <img
                      className=" rounded border p-3 pr-[10px]"
                      src={xomeIcon}
                      alt="icon"
                    />
                    <h1 className=" md:w[324px] w-[255px] text-lg font-semibold	text-white">
                      Smartphones
                    </h1>
                  </div>
                  <p className=" w-[313px] pt-7 text-sm font-normal text-[#999999]">
                    StreamVibe is optimized for both Android and iOS
                    smartphones. Download our app from the Google Play Store or
                    the Apple App Store
                  </p>
                </div>
                <div className=" mb-[20px] w-[361px] bg-[#262626] p-10">
                  <div className=" flex w-[361px] items-center gap-[10px]">
                    <img
                      className=" rounded border p-3 pr-[10px]"
                      src={xome_Icon2}
                      alt="icon"
                    />
                    <h1 className=" md:w[324px] w-[255px] text-lg font-semibold	text-white">
                      Tablet
                    </h1>
                  </div>
                  <p className=" w-[313px] pt-7 text-sm font-normal text-[#999999]">
                    StreamVibe is optimized for both Android and iOS
                    smartphones. Download our app from the Google Play Store or
                    the Apple App Store
                  </p>
                </div>
                <div className=" mb-[20px] w-[361px] bg-[#262626] p-10">
                  <div className=" flex w-[361px] items-center gap-[10px]">
                    <img
                      className=" rounded border p-3 pr-[10px]"
                      src={xome_Icon3}
                      alt="icon"
                    />
                    <h1 className=" md:w[324px] w-[255px] text-lg font-semibold	text-white">
                      Smart TV
                    </h1>
                  </div>
                  <p className=" w-[313px] pt-7 text-sm font-normal text-[#999999]">
                    StreamVibe is optimized for both Android and iOS
                    smartphones. Download our app from the Google Play Store or
                    the Apple App Store
                  </p>
                </div>
                <div className=" mb-[20px] w-[361px] bg-[#262626] p-10">
                  <div className=" flex w-[361px] items-center gap-[10px]">
                    <img
                      className=" rounded border p-3 pr-[10px]"
                      src={xome_Icon4}
                      alt="icon"
                    />
                    <h1 className=" md:w[324px] w-[255px] text-lg font-semibold	text-white">
                      Laptops
                    </h1>
                  </div>
                  <p className=" w-[313px] pt-7 text-sm font-normal text-[#999999]">
                    StreamVibe is optimized for both Android and iOS
                    smartphones. Download our app from the Google Play Store or
                    the Apple App Store
                  </p>
                </div>
                <div className=" mb-[20px] w-[361px] bg-[#262626] p-10">
                  <div className=" flex w-[361px] items-center gap-[10px]">
                    <img
                      className=" rounded border p-3 pr-[10px]"
                      src={xome_Icon5}
                      alt="icon"
                    />
                    <h1 className=" md:w[324px] w-[255px] text-lg font-semibold	text-white">
                      Gaming Consoles
                    </h1>
                  </div>
                  <p className=" w-[313px] pt-7 text-sm font-normal text-[#999999]">
                    StreamVibe is optimized for both Android and iOS
                    smartphones. Download our app from the Google Play Store or
                    the Apple App Store
                  </p>
                </div>
                <div className=" w-[361px] bg-[#262626] p-9">
                  <div className=" flex w-[361px] items-center gap-[10px]">
                    <img
                      className=" rounded border p-3 pr-[10px]"
                      src={xome_Icon6}
                      alt="icon"
                    />
                    <h1 className=" md:w[324px] w-[255px] text-lg font-semibold	text-white">
                      VR Headsets
                    </h1>
                  </div>
                  <p className=" w-[313px] pt-7 text-sm font-normal text-[#999999]">
                    StreamVibe is optimized for both Android and iOS
                    smartphones. Download our app from the Google Play Store or
                    the Apple App Store
                  </p>
                </div>
              </div>
              <div className=" mb-[60px] md:flex  md:items-center  lg:items-center">
                <div>
                  <h1 className=" mt-[100px]	w-[358]	text-sm  font-bold text-white md:w-[900px] md:text-xl lg:text-2xl">
                    Frequently Asked Questions
                  </h1>
                  <p className=" mb-5	mt-2 w-[358px] font-normal text-[#999999] md:w-[1000px] md:text-base">
                    Got questions? We've got answers! Check out our FAQ section
                    to find answers to the most common questions about
                    StreamVibe.
                  </p>
                </div>
                <div>
                  <button className=" h-[63px] w-[176px] bg-red-600 py-[14px] pl-[20px] font-semibold text-white">
                    Ask a Question
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" sm:flex">
            <div>
              <div className=" w-[358px] md:w-[750px]">
                <div className=" flex items-center gap-5">
                  <button className=" font-xl bg-[#1F1F1F] p-4 font-bold text-white">
                    01
                  </button>
                  <h1 className=" h-1 w-[240px] pb-5 text-white md:mb-5 md:w-[500px]">
                    What is StreamVibe?
                  </h1>
                  <button className=" w-6 pr-5 text-white">-</button>
                </div>
                <p className=" w-[338px] p-[10px] text-[#999999] md:w-[550px]">
                  "StreamVibe is a streaming service that allows you to watch
                  movies and shows on demand"
                </p>
              </div>
              <div className=" w-[358px] py-4 md:w-[750px]">
                <div className=" flex items-center gap-5">
                  <button className=" font-xl bg-[#1F1F1F] p-4 font-bold text-white">
                    02
                  </button>
                  <h1 className=" h-1 w-[240px] pb-5 text-white md:mb-5 md:w-[500px]">
                    How much does StreamVibe cost?
                  </h1>
                  <button className=" w-6 pr-5 text-white">+</button>
                </div>
              </div>
              <div className=" w-[358px] py-4 md:w-[750px]">
                <div className=" flex items-center gap-5">
                  <button className=" font-xl bg-[#1F1F1F] p-4 font-bold text-white">
                    03
                  </button>
                  <h1 className=" h-1 w-[240px] pb-5 text-white md:mb-5 md:w-[500px]">
                    What content is available on StreamVibe?
                  </h1>
                  <button className=" w-6 pr-5 text-white">+</button>
                </div>
              </div>
              <div className=" w-[358px] py-4 md:w-[750px]">
                <div className=" flex items-center gap-5">
                  <button className=" font-xl bg-[#1F1F1F] p-4 font-bold text-white">
                    04
                  </button>
                  <h1 className=" h-1 w-[240px] pb-5 text-white md:mb-5 md:w-[500px]">
                    How can I watch StreamVibe?
                  </h1>
                  <button className=" w-6 pr-5 text-white">+</button>
                </div>
              </div>
            </div>
            <div className=" w-[680px] sm:mb-[48px]">
              <div className="  w-[358px] py-4 md:w-[650px]">
                <div className=" flex items-center gap-5">
                  <button className=" font-xl bg-[#1F1F1F] p-4 font-bold text-white">
                    05
                  </button>
                  <h1 className=" h-1 w-[240px] pb-5 text-white md:mb-5 md:w-[500px]">
                    How do I sign up for StreamVibe?
                  </h1>
                  <button className=" w-6 pr-5 text-white">+</button>
                </div>
              </div>
              <div className=" w-[358px] py-4 md:w-[650px]">
                <div className=" flex items-center gap-5">
                  <button className=" font-xl bg-[#1F1F1F] p-4 font-bold text-white">
                    06
                  </button>
                  <h1 className=" h-1 w-[240px] pb-5 text-white md:mb-5 md:w-[500px]">
                    What is the StreamVibe free trial?
                  </h1>
                  <button className=" w-6 pr-5 text-white">+</button>
                </div>
              </div>
              <div className=" w-[358px] py-4 md:w-[650px]">
                <div className=" flex items-center gap-5">
                  <button className=" font-xl bg-[#1F1F1F] p-4 font-bold text-white">
                    07
                  </button>
                  <h1 className=" h-1 w-[240px] pb-5 text-white md:mb-5 md:w-[500px]">
                    How do I contact StreamVibe customer support?
                  </h1>
                  <button className=" w-6 pr-5 text-white">+</button>
                </div>
              </div>
              <div className=" w-[358px] py-4 md:w-[650px]">
                <div className=" flex items-center gap-5">
                  <button className=" font-xl bg-[#1F1F1F] p-4 font-bold text-white">
                    08
                  </button>
                  <h1 className=" h-1 w-[240px] pb-5 text-white md:mb-5 md:w-[500px]">
                    What are the StreamVibe payment methods?
                  </h1>
                  <button className=" w-6 pr-5 text-white">+</button>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:flex md:items-end md:justify-between">
            <div>
              <h1 className=" mb-[10px] mt-[90px] w-[350px] text-xl font-bold text-white md:mt-[110px] md:w-[900px]	">
                Choose the plan that's right for you
              </h1>
              <p className=" w-[350px]  font-normal text-[#999999] md:w-[900px]">
                Join StreamVibe and select from our flexible subscription
                options tailored to suit your viewing preferences. Get ready for
                non-stop entertainment!
              </p>
            </div>
            <div className="  w-[210px] bg-[#0F0F0F] p-2">
              <button className=" bg-[#1F1F1F] px-5 py-3 font-medium text-white">
                Monthly
              </button>
              <button className=" bg-inherit px-5 py-3  font-medium text-[#999999]">
                Yearly
              </button>
            </div>
          </div>
          <div className=" gap-6 md:flex">
            <div className=" container mt-[40px] w-[358px] bg-[#1A1A1A] p-6 md:mt-[60px] md:w-[425px]">
              <h1 className=" mb-[10px] w-[310px] text-lg font-bold text-white md:w-[400px]	">
                Basic Plan
              </h1>
              <p className=" w-[310px] font-normal text-[#666666] md:w-[400px]">
                Enjoy an extensive library of movies and shows, featuring a
                range of content, including recently released titles.
              </p>
              <div className=" flex">
                <h2 className="my-[30px] w-[107px] text-white md:w-[83px]">
                  $9.99
                  <span className=" w-[49px] font-medium text-[#999999]">
                    /month
                  </span>
                </h2>
              </div>
              <div className=" gap-3">
                <button className="mr-2 border bg-[] px-6 py-[14px] text-white">
                  Start Free Trial
                </button>
                <button className="border bg-[#E60000] px-6 py-[14px] text-white">
                  Choose Plan
                </button>
              </div>
            </div>
            <div className=" container mt-[40px] w-[358px] bg-[#1A1A1A] p-6 md:mt-[60px] md:w-[425px]">
              <h1 className=" mb-[10px] w-[310px] text-lg font-bold text-white md:w-[400px]	">
                Standard Plan
              </h1>
              <p className=" w-[310px] font-normal text-[#666666] md:w-[400px]">
                Access to a wider selection of movies and shows, including most
                new releases and exclusive content
              </p>
              <div className=" flex">
                <h2 className="my-[30px] w-[107px] text-white md:w-[83px]">
                  $12.99
                  <span className=" w-[49px] font-medium text-[#999999]">
                    /month
                  </span>
                </h2>
              </div>
              <div className=" gap-3">
                <button className="mr-2 border bg-[] px-6 py-[14px] text-white">
                  Start Free Trial
                </button>
                <button className="border bg-[#E60000] px-6 py-[14px] text-white">
                  Choose Plan
                </button>
              </div>
            </div>
            <div className=" container mt-[40px] w-[358px] bg-[#1A1A1A] p-6 md:mt-[60px] md:w-[425px]">
              <h1 className=" mb-[10px] w-[310px] text-lg font-bold text-white md:w-[400px]	">
                Premium Plan
              </h1>
              <p className=" w-[310px] font-normal text-[#666666] md:w-[400px]">
                Access to a widest selection of movies and shows, including all
                new releases and Offline Viewing
              </p>
              <div className=" flex">
                <h2 className="my-[30px] w-[107px] text-white md:w-[83px]">
                  $14.99
                  <span className=" w-[49px] font-medium text-[#999999]">
                    /month
                  </span>
                </h2>
              </div>
              <div className=" gap-3">
                <button className="mr-2 border bg-[] px-6 py-[14px] text-white">
                  Start Free Trial
                </button>
                <button className="border bg-[#E60000] px-6 py-[14px] text-white">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Homes;
