
import React, { useState, useEffect } from "react";
import { assets } from "../assets";
import { FiList } from "react-icons/fi";
import { motion } from "framer-motion"; // import framer-motion for animated div

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [hoveredSection, setHoveredSection] = useState(""); // track hovered section for the line

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  const handleSectionChange = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleSectionChange, {
      threshold: 0.6,
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleMobileLinkClick = (section) => {
    smoothScroll(section);
    setIsMobileNavVisible(false); // Close mobile nav after scrolling
  };

  // Close mobile nav on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileNavVisible(false); // Automatically close mobile nav on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`fixed w-full top-0 min-h-full left-0 z-50 transition-transform duration-300 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="flex justify-between items-center px-6 relative">
        <div>
          <img src={assets.icon_p} alt="Logo" />
        </div>
        <div className="hidden lg:flex relative">
          <ul className="flex font-semibold pr-10 items-center text-gray-400 relative">
            {["home", "about", "projects", "contact"].map((section) => (
              <li
                key={section}
                className={`mx-4 cursor-pointer hover:bg-opacity-35 duration-100 py-1 px-7 rounded-sm relative ${
                  activeSection === section ? "cursor-pointer" : ""
                }`}
                onMouseEnter={() => setHoveredSection(section)} // Track hovered section
                onMouseLeave={() => setHoveredSection("")} // Reset on mouse leave
              >
                <button onClick={() => smoothScroll(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
                {(activeSection === section || hoveredSection === section) && (
                  <motion.div
                    className="absolute left-0 ml-2 bottom-0 h-1 bg-orange-500 rounded"
                    layoutId="underline"
                    initial={false}
                    animate={{ width: "70%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="lg:hidden cursor-pointer hover:bg-gray-800 p-2 rounded-md hover:bg-opacity-50 duration-200 text-white z-60"
          onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}
        >
          <FiList className="text-4xl" />
        </button>
      </nav>

      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 left-0 h-full bg-black bg-opacity-90 z-50 w-2/5 transform transition-transform duration-300 ease-in-out ${
          isMobileNavVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center my-16 p-6">
          {["home", "about", "projects", "contact"].map((section) => (
            <button
              key={section}
              className={`my-7 duration-200  cursor-pointer text-white text-xl hover:bg-opacity-35 hover:bg-gray-700 py-3 px-10 rounded-xl ${
                activeSection === section ? "bg-gradient-to-r from-orange-700 to-orange-400 bg-opacity-35" : ""
              }`}
              onClick={() => handleMobileLinkClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
