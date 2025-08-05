import React from "react";
import { assets } from "../assets";
import { BsArrowBarRight } from "react-icons/bs";

function Sec_3() {
  return (
    <div className="relative bg-gradient-to-tr from-gray-200 to-gray-100 bg-center bg-cover scroll-smooth min-h-screen w-full">
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-6 sm:mb-8 md:mb-10 text-white font-semibold">
            <span className="border-b-2 text-2xl sm:text-3xl md:text-4xl lg:text-[45px] text-red-600 border-white">P</span><span className="text-gray-600 font-normal">ROJECTS</span>
          </div>
          <p className="text-sm sm:text-base md:text-lg font-semibold text-center max-w-3xl">
            <span className="text-gray-800">Here are some of my projects that showcase my skills and creativity. Click on the images to learn more about each project.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-20 md:gap-24 lg:gap-32 mt-10 sm:mt-16 md:mt-20 items-center text-center justify-center w-full max-w-4xl">
          <div className="relative">
            <img
              src={assets.logo}
              alt="project1"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm h-20 sm:h-24 mx-auto py-2 sm:py-3 px-4 sm:px-6 object-cover"
            />
            <div className="absolute inset-0 bg-gray-700 bg-opacity-60 rounded-3xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <a href="https://github.com/abayomiprosper4/Rent_Man.git" className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl flex items-center">RentPadi <BsArrowBarRight className="ml-1"/></a>
            </div>
          </div>
          <div className="relative">
            <img
              src={assets.icon_p}
              alt="project1"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mx-auto p-3 sm:p-4"
            />
            <div className="absolute inset-0 bg-gray-700 bg-opacity-60 rounded-3xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
              <a href="https://github.com/abayomiprosper4/Web-Portfolio.git" className="text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl flex items-center">React Portfolio <BsArrowBarRight className="ml-1"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sec_3
