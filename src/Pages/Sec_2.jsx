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
      className="relative bg-hero-pattern2 bg-center bg-cover scroll-smooth h-full w-full sm:w-full md:w-full lg:w-full xl:w-full bg-teal-50"
    >
      <div className="absolute my-6 lg:left-[42.5%] left-[35%]  text-[35px]">
        <div className="flex items-center">
          <div className="text-red-600 text-[45px] font-semibold">
            A<span className="border-b-2 border-black">BOU</span>T
          </div>
          <span className="ml-2 text-4xl">ME</span>
        </div>
      </div>

      <div className="main pt-10 pb-52">
        <div className="flex flex-col lg:flex-row w-full justify-between px-10">
          <div className="py-26 text-[20px] flex-1">
            <div className="float-left mt-14 flex">
              <div className="bg-gray-900 text-white py-[16%] w-96 sm:w-full md:w-full sm:py-[20%] md:py-[19%] mt-24 mx-10 px-12 lg:py-[21%] lg:w-96 xl:w-full">
                <p className="text-[17px] mb-4">
                  Fueled by a passion for <span className="underline-offset-2 underline italic">technology</span> and <span className="underline-offset-2 underline italic">creativity</span>, I
                  seamlessly blend web development with strategic social media
                  management to create impactful digital experiences. I thrive
                  in collaborative environments, eagerly embracing opportunities
                  to learn and innovate.
                </p>
                <p className="text-[17px]">
                  With an eye on the latest industry trends, I constantly
                  explore new tools and techniques to elevate my skills. When
                  I'm not coding or crafting engaging content, I'm dedicated to
                  pushing the boundaries of what's possible in the digital
                  landscape.
                </p>
              </div>
              <div className="bg-red-600 px-5 border-transparent border-t-2 border-r-2 py-16 lg:py-28 lg:pb-5 md:py-24 absolute text-white md:translate-y-16 translate-y-12 hover:translate-x-24 hover:bg-transparent hover:text-transparent hover:border-red-600 hover:border-t-2 hover:border-r-2 transition-all ease-in-out duration-500 w-96 lg:w-[36%] sm:w-[80%] md:w-[82%] xl:text-[17px] sm:text-[17px]">
                <div className="font-semibold mb-2">
                  <span className="underline underline-offset-4">Web</span>
                  Developer <FiCode className="inline ml-1 items-center" />
                </div>
                <p className="text-[17px] mb-6">
                  I'm a Front-end web Developer on a mission to craft seamless,
                  responsive experiences for users. With a keen eye for detail,
                  I tranform ideas into stunning and eye-catching web
                  applications!
                </p>
                <div className="font-semibold mb-2">
                  <span className="underline underline-offset-4">Social</span>
                  Media Manager
                  <FiCamera className="inline ml-1 items-center" />
                </div>
                <p className="text-[17px]">
                  As a social media manager, I bring brands to life through
                  engaging content strategies that captivate audiences. I dive
                  deep into analytics to fine-tune campaigns, building authentic
                  connections and fueling growth for the brands I manage.
                </p>
                <div className="float-right animate-bounce pt-3 sm:text-sm text-lg sm:pt-4 md:pt-8 lg:pt-16">
                  Hover To See More <FiChevronRight className="inline" />
                </div>
              </div>
            </div>
          </div>

          <div className="mx-20 mt-24 flex-1">
            <div className="exp text-center text-3xl my-10 tracking-wide">
              <span className="expertise text-center text-5xl transition-all duration-300 font-semibold border-b border-red-600 text-red-600">
                E
              </span>
              xpertise
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 gap-10 sm:gap-6 md:gap-6 lg:gap-6 text-center items-center">
              <div className="w-24 h-24 mx-auto">
                <SiHtml5 className="transition-all duration-300 text-7xl text-center w-12 h-12 m-6 hover:text-orange-500 hover:scale-150" />
              </div>
              <div className="w-24 h-24 mx-auto transition-all duration-300">
                <SiCss3 className="transition-all duration-300 text-7xl text-center w-12 h-12 m-6 hover:text-blue-500 hover:scale-150" />
              </div>
              <div className="w-24 h-24 mx-auto ">
                <SiReact className="transition-all duration-500 text-7xl text-center w-12 h-12 m-6 hover:text-blue-400 hover:rotate-180 hover:scale-150" />
              </div>
              <div className="w-24 h-24 mx-auto">
                <SiJavascript className="transition-all duration-300 text-7xl text-center w-12 h-12 m-6 hover:text-yellow-500 hover:bg-gradient-to-tr from-yellow-300 via-white to-yellow-600 hover:scale-150" />
              </div>
              <div className="w-24 h-24 mx-auto">
                <SiPython className="transition-all duration-500 text-7xl text-center w-12 h-12 m-6 hover:rotate-180 hover:scale-150" />
              </div>
              <div className="w-24 h-24 mx-auto">
                <SiNextdotjs className="transition-all duration-300 shadow-lg hover:shadow-neutral-400 rounded-full text-7xl text-center m-6 w-12 h-12 hover:scale-150" />
              </div>
            </div>

            <div className="mt-10">
              <div className="text-center">
                <div className="text-3xl mt-16 mb-8 tracking-wide">
                  <span className="text-red-600 font-semibold text-5xl border-b border-red-600">
                    P
                  </span>
                  ages managed:
                </div>
                <ul className="list-none flex justify-center items-center p-0  mt-4 flex-wrap">
                  <li className="flex flex-col items-center justify-center mb-4 mx-5">
                    <a href="https://www.instagram.com/vanillabyaria/">
                      <img
                        src={assets.VCLogo}
                        alt="Vanilla Concierge"
                        className="w-20 h-20 rounded-full hover:scale-125 duration-200 hover:shadow-gray-600 hover:shadow-md"
                      />
                    </a>
                    <span className="py-3 font-semibold">
                      VANILLA CONCIERGE
                    </span>
                  </li>
                  <li className="flex flex-col items-center justify-center mb-4 mx-5">
                    <a href="https://www.instagram.com/chowfestng/">
                      <img
                        src={assets.Chowfest}
                        alt="Chowfest Nigeria"
                        className="w-20 h-20 rounded-full hover:scale-125 duration-200 hover:shadow-gray-600 hover:shadow-md"
                      />
                    </a>
                    <span className="py-3 font-semibold">CHOWFEST NG</span>
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
