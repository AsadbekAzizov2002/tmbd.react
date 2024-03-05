import React from "react";
import tiv from "./assets/tiv.svg";
import fes from "./assets/fes.svg";
import ins from "./assets/ins.svg";

const Footer = () => {
  return (
    <div>
      <div className="  md:flex md:h-[344px] md:items-center">
        <div>
          <h2 className=" mb-[10px] w-[160px] font-bold text-white md:w-[900px]">
            Start your free trial today !
          </h2>
          <p className=" mb-[60px] w-[300px] font-normal text-[#999999] md:w-[900px]">
            This is a clear and concise call to action that encourages users to
            sign upfors free trial of StreamVibe,
          </p>
        </div>
        <div>
          <button className=" rounded bg-red-600 px-8 py-3 text-white">
            Start a Free Trail
          </button>
        </div>
      </div>
      <div className="md:flex md:h-[204px]">
        <div className=" flex w-[390px]">
          <div className="footr_container container  w-[179px]">
            <h2 className=" mb-4 text-white ">Home</h2>
            <p className=" font-medium text-[#999999]">Categories</p>
            <p className=" font-medium text-[#999999]">Devices</p>
            <p className=" font-medium text-[#999999]">Pricing</p>
            <p className=" font-medium text-[#999999]">FAQ</p>
          </div>
          <div className="footr_container container  w-[179px]">
            <h2 className=" mb-4 text-white ">Movies</h2>
            <p className=" font-medium text-[#999999]">Gernes</p>
            <p className=" font-medium text-[#999999]">Trending</p>
            <p className=" font-medium text-[#999999]">New Release</p>
            <p className=" font-medium text-[#999999]">Popular</p>
          </div>
        </div>
        <div className="flex w-[390px] sm:mt-[]">
          <div className="footr_container container  w-[179px]">
            <h2 className=" mb-4  text-white ">Shows</h2>
            <p className=" font-medium text-[#999999]">Gernes</p>
            <p className=" font-medium text-[#999999]">Trending</p>
            <p className=" font-medium text-[#999999]">New Release</p>
            <p className=" font-medium text-[#999999]">Popular </p>
          </div>
          <div className="footr_container container  w-[179px]">
            <h2 className=" mb-4 text-white ">Support</h2>
            <p className=" font-medium text-[#999999]">Contact Us</p>
          </div>
        </div>
        <div className="mb-[30px] flex">
          <div className="footr_container container  w-[179px]">
            <h2 className=" mb-4 text-white ">Subscription</h2>
            <p className=" font-medium text-[#999999]">Plans</p>
            <p className=" font-medium text-[#999999]">Features</p>
          </div>
          <div>
            <div className="footr_container container  w-[179px]">
              <h2 className=" mb-4 text-white ">Connect With Us</h2>
              <div className=" flex ">
                <img className=" bg-[#1A1A1A] p-3" src={tiv} alt="img" />
                <img className=" bg-[#1A1A1A] p-3" src={fes} alt="img" />
                <img className=" bg-[#1A1A1A] p-3" src={ins} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:flex md:justify-between">
        <p className="md:w[311px] w-[262px] text-[#999999]">
          @2023 streamvib, All Rights Reserved
        </p>
        <div className=" gap flex">
          <p className=" w-[242px] text-[#999999] md:w-[111px]">Terms of Use</p>
          <p className=" mx-3 w-[242px] text-[#999999] md:w-[111px]">
            Privacy Policy
          </p>
          <p className=" w-[242px] text-[#999999] md:w-[111px]">
            Cookie Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
