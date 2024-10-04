import React from "react";
import { assets } from "../assets";
import { FiArrowRight } from "react-icons/fi";

function Sec_3() {
  const Section3 = () => (
    <section id="projects" className="min-h-screen w-full bg-sky-200 p-8">
      <div className="main text-center">
        <p className="exp2 text-4xl tracking-wide py-20">
          <span className="expertise text-6xl font-semibold border-b border-red-600 text-red-600">
            P
          </span>
          ROJECTS
        </p>
        <div className="projects grid grid-cols-1 gap-12 items-center xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
          <Project src={assets.logo} text="Rent Management System" />
          <Project src={assets.icon_p} text="Portfolio" />
        </div>
      </div>
    </section>
  );

  const Project = ({ src, text }) => (
    <div className="pjct mb-8 p-2 mx-20 bg-white rounded-lg shadow-md flex flex-col items-center">
      <a href="#">
        <img src={src} alt={text} className="w-40 h-40 object-contain mb-6" />
      </a>
      {/* The text section */}
      <div className="text cursor-pointer flex items-center space-x-2 hover:bg-gray-800 hover:text-white p-3 px-20 text-gray-800 text-lg font-medium">
        <span>{text}</span>
        <FiArrowRight className="inline" />
      </div>
    </div>
  );

  return (
    <div className="grid relative items-center">
      <Section3 />
    </div>
  );
}

export default Sec_3;
