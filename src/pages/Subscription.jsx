import { useState } from "react";
import Footer from "../Footer";
const Subscription = () => {
  const [step, setStep] = useState(5);
  return (
    <div className="container mx-auto max-w-[1360px] bg-[#141414]">
      <div className="container mx-auto max-w-[1360px] bg-[#141414] px-5 ">
        <div className=" md:flex md:items-end md:justify-between">
          <div>
            <h1 className=" mb-[10px] mt-[90px] w-[350px] text-xl font-bold text-white md:mt-[110px] md:w-[900px]	">
              Choose the plan that's right for you
            </h1>
            <p className=" w-[350px]  font-normal text-[#999999] md:w-[900px]">
              Join StreamVibe and select from our flexible subscription options
              tailored to suit your viewing preferences. Get ready for non-stop
              entertainment!
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
              Enjoy an extensive library of movies and shows, featuring a range
              of content, including recently released titles.
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
        <div>
          <div>
            <h2 className="mb-2 mt-20 w-[358px] font-bold text-white md:w-[1000px]">
              Compare our plans and find the right one for you
            </h2>
            <p className=" w-[350px] text-sm font-normal text-[#999999] lg:w-[970px]">
              StreamVibe offers three different plans to fit your needs: Basic,
              Standard, and Premium. Compare the features of each plan and
              choose the one that's right for you.
            </p>
          </div>
          <div>
            <div className="mb- flex-non w-[271px]e container mt-[60px] flex">
              <h1 className=" w-[319px] flex-none border border-black px-6 py-6 text-base font-semibold text-white">
                Features
              </h1>
              <h1 className=" w-[319px] border border-black px-6  py-6 text-base font-semibold text-white">
                Basic
              </h1>
              <div className=" flex w-[319px] items-center gap-1  border border-black px-6 py-6">
                <h1 className=" text-base font-semibold text-white">
                  Standard
                </h1>
                <button className=" rounded bg-red-500 p-[6px] text-white">
                  Popular
                </button>
              </div>
              <h1 className="w-[319px] border  border-black px-6  py-6 text-base font-semibold text-white">
                Premium
              </h1>
            </div>
          </div>
        </div>
        <div className=" flex ">
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Price
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            $9.99/Month
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            $12.99/Month
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            $14.99/Month
          </p>
        </div>
        <div className=" flex ">
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Content
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Access to a wide selection of movies and shows, including some new
            releases.
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Access to a wider selection of movies and shows, including most new
            releases and exclusive content
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Access to a widest selection of movies and shows, including all new
            releases and Offline Viewing
          </p>
        </div>
        <div className=" flex ">
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Devices
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Watch on one device simultaneously
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            $Watch on Two device simultaneously
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Watch on Four device simultaneously
          </p>
        </div>
        <div className=" flex ">
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Free Trail
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            7 Days
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            7 Days
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            7 Days
          </p>
        </div>
        <div className=" flex ">
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Cancel Anytime
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Yes
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Yes
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Yes
          </p>
        </div>
        <div className=" flex ">
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            HDR
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            No
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Yes
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Yes
          </p>
        </div>
        <div className=" flex ">
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Dolby Atmos
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            No
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Yes
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Yes
          </p>
        </div>
        <div className=" flex ">
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Ad - Free
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            No
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Yes
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Yes
          </p>
        </div>
        <div className=" flex ">
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Offline Viewing
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            No
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Yes, for select titles.
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Yes, for all titles.
          </p>
        </div>
        <div className=" flex ">
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Family Sharing
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            No
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Yes, up to 5 family members.
          </p>
          <p className="  w-[319px]  border border-black p-6 font-medium text-[#999999]">
            Yes, up to 6 family members.
          </p>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Subscription;
