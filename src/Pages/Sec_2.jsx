import React from "react";
import { assets } from "../assets";
import { FiCamera, FiChevronRight, FiCode } from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
} from "react-icons/si";

function Sec_2() {
  const Section2 = () => (
    <section
      id="about"
      className="relative bg-hero-pattern2 bg-center bg-cover scroll-smooth min-h-screen w-full bg-teal-50"
    >
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center">
        <div className="flex items-center">
          <div className="text-red-600 text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-semibold">
            A<span className="border-b-2 border-black">BOU</span>T
          </div>
          <span className="ml-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">ME</span>
        </div>
      </div>

      <div className="main pt-20 pb-20">
        <div className="flex flex-col lg:flex-row w-full justify-between px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="flex-1 mb-10 lg:mb-0">
            <div className="relative mt-8 lg:mt-14">
              <div className="relative w-full max-w-lg mx-auto lg:mx-0 h-96 sm:h-[420px] md:h-[450px] lg:h-[480px]">
                {/* Blue box - always present, visible when red box slides away */}
                <div className="absolute inset-0 bg-gray-900 text-white p-6 sm:p-8 md:p-10 lg:p-12 z-10 flex flex-col justify-center">
                  <p className="text-sm sm:text-base md:text-[17px] mb-4">
                    Fueled by a passion for <span className="underline-offset-2 underline italic">technology</span> and <span className="underline-offset-2 underline italic">creativity</span>, I
                    seamlessly blend web development with strategic social media
                    management to create impactful digital experiences. I thrive
                    in collaborative environments, eagerly embracing opportunities
                    to learn and innovate.
                  </p>
                  <p className="text-sm sm:text-base md:text-[17px]">
                    With an eye on the latest industry trends, I constantly
                    explore new tools and techniques to elevate my skills. When
                    I'm not coding or crafting engaging content, I'm dedicated to
                    pushing the boundaries of what's possible in the digital
                    landscape.
                  </p>
                </div>
                
                {/* Red box - slides left on hover, slides back on mouse leave */}
                <div className="absolute inset-0 bg-red-600 p-6 sm:p-8 md:p-10 lg:p-12 text-white hover:-translate-x-full transition-transform duration-500 z-20 flex flex-col justify-between cursor-pointer">
                  <div>
                    <div className="font-semibold mb-4 text-sm sm:text-base">
                      <span className="underline underline-offset-4">Web</span>
                      Developer <FiCode className="inline ml-1 items-center" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base lg:text-[17px] mb-6 lg:mb-8">
                      I'm a Front-end web Developer on a mission to craft seamless,
                      responsive experiences for users. With a keen eye for detail,
                      I transform ideas into stunning and eye-catching web
                      applications!
                    </p>
                    <div className="font-semibold mb-4 text-sm sm:text-base">
                      <span className="underline underline-offset-4">Social </span> 
                      Media Manager
                      <FiCamera className="inline ml-1 items-center" />
                    </div>
                    <p className="text-xs sm:text-sm md:text-base lg:text-[17px] mb-6">
                      As a social media manager, I bring brands to life through
                      engaging content strategies that captivate audiences. I dive
                      deep into analytics to fine-tune campaigns, building authentic
                      connections and fueling growth for the brands I manage.
                    </p>
                  </div>
                  <div className="text-right animate-bounce text-xs sm:text-sm md:text-base lg:text-lg">
                    Hover To See More <FiChevronRight className="inline" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 px-4 sm:px-8 md:px-12 lg:px-20 mt-8 lg:mt-24">
            <div className="exp text-center text-xl sm:text-2xl md:text-3xl my-6 lg:my-10 tracking-wide">
              <span className="expertise text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-300 font-semibold border-b border-red-600 text-red-600">
                E
              </span>
              xpertise
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-center items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto">
                <SiHtml5 className="transition-all duration-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 m-4 sm:m-5 md:m-6 hover:text-orange-500 hover:scale-125 lg:hover:scale-150" />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto transition-all duration-300">
                <SiCss3 className="transition-all duration-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 m-4 sm:m-5 md:m-6 hover:text-blue-500 hover:scale-125 lg:hover:scale-150" />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto">
                <SiReact className="transition-all duration-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 m-4 sm:m-5 md:m-6 hover:text-blue-400 hover:rotate-180 hover:scale-125 lg:hover:scale-150" />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto">
                <SiJavascript className="transition-all duration-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 m-4 sm:m-5 md:m-6 hover:text-yellow-500 hover:bg-gradient-to-tr from-yellow-300 via-white to-yellow-600 hover:scale-125 lg:hover:scale-150" />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto">
                <SiPython className="transition-all duration-500 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 m-4 sm:m-5 md:m-6 hover:rotate-180 hover:scale-125 lg:hover:scale-150" />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto">
                <SiNextdotjs className="transition-all duration-300 shadow-lg hover:shadow-neutral-400 rounded-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center m-4 sm:m-5 md:m-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:scale-125 lg:hover:scale-150" />
              </div>
            </div>

            <div className="mt-8 lg:mt-10">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl mt-8 lg:mt-16 mb-6 lg:mb-8 tracking-wide">
                  <span className="text-red-600 font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl border-b border-red-600">
                    P
                  </span>
                  ages managed:
                </div>
                <ul className="list-none flex justify-center items-center p-0 mt-4 flex-wrap gap-4 sm:gap-6">
                  <li className="flex flex-col items-center justify-center">
                    <a href="https://www.instagram.com/vanillabyaria/">
                      <img
                        src={assets.VCLogo}
                        alt="Vanilla Concierge"
                        className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full hover:scale-110 sm:hover:scale-125 duration-200 hover:shadow-gray-600 hover:shadow-md"
                      />
                    </a>
                    <span className="py-2 sm:py-3 font-semibold text-xs sm:text-sm md:text-base">
                      VANILLA CONCIERGE
                    </span>
                  </li>
                  <li className="flex flex-col items-center justify-center">
                    <a href="https://www.instagram.com/chowfestng/">
                      <img
                        src={assets.Chowfest}
                        alt="Chowfest Nigeria"
                        className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full hover:scale-110 sm:hover:scale-125 duration-200 hover:shadow-gray-600 hover:shadow-md"
                      />
                    </a>
                    <span className="py-2 sm:py-3 font-semibold text-xs sm:text-sm md:text-base">CHOWFEST NG</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  return (
    <div>
      <Section2 />
    </div>
  );
}

export default Sec_2;
