import { NavLink } from "react-router-dom";
import nam from "../assets/nam.svg";
import Footer from "../Footer";
import sub from "../assets/sub.png";

const Support = () => {
  return (
    <div>
      <div className=" container items-center px-4 md:flex">
        <div>
          <h1 className=" mb-[10px] mt-20 w-[300px] text-2xl font-bold text-white md:mt-[100px]  md:w-[400px] md:text-4xl lg:w-[500px]	 lg:text-5xl">
            Welcome to our support page!
          </h1>
          <p className="w-[350px] text-sm font-normal text-[#999999]	md:w-[429px] md:text-base lg:w-[530px] lg:text-lg">
            We're here to help you with any problems you may be having with our
            product.
          </p>
          <div className=" h-[371px] w-[350px]">
            <img src={sub} alt="" />
          </div>
        </div>
        <div className="md:ml-[50px] ">
          <div className=" mg:grid md:ml-[50px]  md:grid md:w-[800px]">
            <div className=" md:flex">
              <div className=" mr-5">
                <h2 className=" text-base font-semibold text-white md:text-lg">
                  First Name
                </h2>
                <input
                  className=" mb-5 w-[277px] bg-[#262626] p-4  text-white"
                  type="search"
                  name="search"
                  id=" "
                  placeholder="Enter First Name"
                />
              </div>
              <div>
                <h2 className=" text-base font-semibold text-white md:text-lg">
                  Last Name
                </h2>
                <input
                  className=" mb-5 w-[277px] bg-[#262626] p-4 text-white"
                  type="search"
                  name="search"
                  id=""
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div className=" md:flex">
              <div>
                <h2 className=" text-base font-semibold text-white md:text-lg">
                  Email
                </h2>
                <input
                  className=" mb-5 w-[277px] bg-[#262626] p-4  text-white"
                  type="search"
                  name="search"
                  id=""
                  placeholder="Enter your Email"
                />
              </div>
              <div className=" md:ml-5">
                <h2 className=" text-base font-semibold text-white md:text-lg">
                  Phone Number
                </h2>
                <div>
                  <button className=" w-[76px] bg-[#262626] p-5">
                    <img src={nam} alt="" />
                  </button>
                  <input
                    className=" mb-5 w-[189px] bg-[#262626] p-4  text-white"
                    type="search"
                    name="search"
                    id=""
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="w-[309px] font-bold text-white md:w-[700px]">
                Message
              </h1>
              <input
                className=" w-[309px] bg-[#262626] px-4 pb-[72px] pt-4 text-white md:w-[570px]"
                type="search"
                name="search"
                id=""
                placeholder="Enter your Message"
              />
            </div>
            <div className=" mb-20 mt-10 items-center md:flex">
              <p className=" w-[277px] text-base font-normal text-[#999999] md:w-[360px]">
                I agree with Terms of Use and Privacy Policy
              </p>
              <button className=" w-[309px] items-center justify-center bg-red-600 px-[105px] py-[14px] text-white md:w-[138px] md:px-[14px] md:py-5">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" mb-[60px] md:flex  md:items-center  lg:items-center">
        <div>
          <h1 className=" mt-[100px]	w-[358]	text-sm  font-bold text-white md:w-[900px] md:text-xl lg:text-2xl">
            Frequently Asked Questions
          </h1>
          <p className=" mb-5	mt-2 w-[358px] font-normal text-[#999999] md:w-[1000px] md:text-base">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <div>
          <button className=" h-[63px] w-[176px] bg-red-600 py-[14px] pl-[20px] font-semibold text-white">
            Ask a Question
          </button>
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
              "StreamVibe is a streaming service that allows you to watch movies
              and shows on demand"
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
      <Footer />
    </div>
  );
};

export default Support;
