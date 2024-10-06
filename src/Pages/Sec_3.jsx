import React from "react";
import { assets } from "../assets";
import { FiArrowRight } from "react-icons/fi";

function Sec_3() {
  const Section3 = () => (
    <section id="projects" className="min-h-auto py-20 w-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700 p-8">
      <div className="main text-center">
        <p className="exp2 text-4xl tracking-wide py-24">
          <span className="expertise text-6xl font-semibold border-b border-red-600 text-red-600">
            P
          </span>
          <span className="font-semibold text-white">ROJECTS</span>
        </p>
        <div className="projects grid grid-cols-1 gap-12 items-center xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
          <a href="https://rent-man.vercel.app/"><Project src={assets.logo} text="Rent Management System" /></a>
          <Project src={assets.icon_p} text="Personal Portfolio" />
        </div>
      </div>
    </section>
  );

  const Project = ({ src, text }) => (
    <div className="pjct mb-8 p-2 mx-20 bg-neutral-100 rounded-lg shadow-md flex flex-col items-center">
      <a href="#">
        <img src={src} alt={text} className="w-40 h-40 object-contain mb-6" />
      </a>
      <div className="text cursor-pointer duration-200 flex items-center space-x-2 hover:bg-gray-800 hover:text-white p-3 px-auto rounded-md text-gray-800 text-lg font-medium">
        <span>{text}</span>
        <FiArrowRight className="inline" />
      </div>
    </div>
  );

  return (
    <div className="grid relative items-center">
      <Section3 />
    </div>
  )
}

export default Sec_3;
