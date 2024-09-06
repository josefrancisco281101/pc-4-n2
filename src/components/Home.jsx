import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="text-white">
      <img
        className="absolute"
        src="/home/background-home-desktop.jpg"
        alt=""
      />

      <div className="relative ">
        <Navbar />

        <div className="flex mt-20 items-center justify-between">
          <div className="flex flex-col justify-start mt-[10%] w-[398px] text-center">
            <div></div>
            <h3 className="text-[#a0a2b9]">SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className="text-7xl p-4">SPACE</h1>
            <p className="text-[#a0a2b9] pt-4">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="flex justify-end mx-40 mt-10">
            <button className="bg-white text-black px-10 py-2 mt-10 h-[200px] w-[200px] rounded-full hover:bg-[#ffffff] hover:text-[#a0a2b9] hover:border-2 text-3xl">
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
