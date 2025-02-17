import React, { useState, useEffect } from "react";
import { assets } from "../assets";
import { FiFile, FiArrowDown } from "react-icons/fi";

function Sec_1() {
  const [animationStage, setAnimationStage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setAnimationStage(1), 2400),
      setTimeout(() => setAnimationStage(2), 2800),
      setTimeout(() => setAnimationStage(3), 3000),
      setTimeout(() => setAnimationStage(4), 4000),
    ];

    const hideOverlayTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      clearTimeout(hideOverlayTimer);
    };
  }, []);

  return (
    <div className="relative h-auto">
      {isLoading && (
        <div className="fixed inset-0 z-20 bg-white transition-opacity duration-700 opacity-100"></div>
      )}
      <div className="inset-0 h-auto bg-black bg-opacity-40 absolute"></div>

      <video
        className=" inset-0 h-full object-center w-full fixed object-cover -z-10"
        src="src/assets/6913203_Motion Graphics_Motion Graphic_3840x2160.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <a href="https://www.freepik.com/free-video/motion-graphic-abstract-background-with-memphis-elements_3294781#fromView=search&page=1&position=3&uuid=9f729f58-85e2-4bc5-b0ba-d0b310a86d44" className="text-transparent">Video by freepik</a>


      <section
        id="home"
        className=" relative z-10 flex items-center text-gray-100 h-auto"
      >
        <div className="relative z-10 flex flex-col justify-center h-full">
          <div className="p-20 text-left">
            <div className="topic my-20">
              <div>
                <span className="title font-semibold">
                  <div
                    className={`txt01 mb-2 text-7xl lg:text-8xl font-bold transition-all duration-1000 bg-gradient-to-r from-red-700 via-red-300 to-green-300 inline-block text-transparent bg-clip-text ${
                      animationStage >= 1
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <span className="text-9xl">HI !</span>
                  </div>
                  <div
                    className={`mb-5 text-7xl lg:text-8xl transition-all duration-1000 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-transparent bg-clip-text ${
                      animationStage >= 2
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    I'M ABAYOMI PROSPER
                  </div>
                </span>
              </div>
              <p
                className={`subtitle text-md my-12 font-mono tracking-wide transition-all duration-1000 ${
                  animationStage >= 3
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                WEB DEVELOPER | UI/UX DESIGNER | SOCIAL MEDIA MANAGER.
              </p>
              <div
                className={`resume block text-center lg:flex items-center transition-all duration-1000 ${
                  animationStage >= 4
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <a
                  href="src/assets/Prosper CV.pdf"
                  download={assets.Resume}
                  className="flex items-center text-white border mr-5 lg:mb-0 mb-5 border-white px-10 py-3 rounded-[10px] transition-all hover:bg-orange-600 ease-in-out duration-200"
                >
                  Resume <FiFile className="inline text-lg ml-1" />
                </a>
                <a
                  href="#about"
                  className="text-white scroll-smooth flex items-center border border-white px-10 py-3 rounded-[10px] transition-all hover:bg-orange-600 ease-in-out duration-200"
                >
                  View Portfolio <FiArrowDown className="inline ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sec_1;
