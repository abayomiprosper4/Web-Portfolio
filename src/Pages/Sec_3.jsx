import React from "react";
import { assets } from "../assets";
import { BsArrowBarRight } from "react-icons/bs";

function Sec_3() {
  return (
    <div className="relative bg-gradient-to-tr from-gray-400 to-gray-200 bg-center bg-cover scroll-smooth h-full w-full sm:w-full md:w-full lg:w-full xl:w-full">
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl font-bold text-center">
        <div className="text-[40px] my-5 text-white font-semibold">
            <span className="border-b-2 text-[45px] text-red-600 border-white">P</span>ROJECTS
          </div>
          <p className="text-lg font-semibold text-center">
            <span className="text-gray-800 text-lg">Here are some of my projects that showcase my skills and creativity. Click on the images to learn more about each project.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-32 mt-20 items-center text-center justify-center sm:grid-cols-1 lg:grid-cols-2">
          <div className="relative">
            <img
              src={assets.logo}
              alt="project1"
              className="w-80 h-24 mx-auto py-3 px-6 object-cover"
            />
            <div className="absolute inset-0 bg-gray-700 bg-opacity-60 rounded-3xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <a href="" className="text-white font-semibold text-xl flex items-center">RentPadi <BsArrowBarRight/></a>
            </div>
          </div>
          <div className="relative">
            <img
              src={assets.reactLogo}
              alt="project1"
              className="w-100 h-40 mx-auto p-4 object-cover"
            />
            <div className="absolute inset-0 bg-gray-700 bg-opacity-60 rounded-3xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <a href="" className="text-white font-semibold text-xl flex items-center">React Portfolio <BsArrowBarRight/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sec_3
