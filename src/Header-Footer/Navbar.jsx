import React, { useState, useEffect } from "react";
import { assets } from "../assets";
import { FiList } from "react-icons/fi";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

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
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      setIsMobileNavVisible(false); // Close mobile nav after scrolling
    }
  };

  return (
    <div
      className={`fixed w-full top-0 left-0 z-50 transition-transform duration-300 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center px-6">
        <div>
          <img src={assets.icon_p} alt="Logo" />
        </div>
        <div className="hidden lg:flex">
          <ul className="flex pr-10 items-center text-white">
            {["home", "about", "projects", "contact"].map((section) => (
              <li
                key={section}
                className={`mx-4 hover:bg-opacity-35 duration-300 hover:bg-gray-700 py-1 px-7 rounded-sm ${
                  activeSection === section ? "bg-gradient-to-r from-orange-600 to-orange-400  bg-opacity-35" : ""
                }`}
              >
                <button onClick={() => smoothScroll(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="lg:hidden hover:bg-gray-700 p-2 rounded-md hover:bg-opacity-50 duration-200 text-white z-60"
          onClick={() => setIsMobileNavVisible(!isMobileNavVisible)}
        >
          <FiList className="text-4xl" />
        </button>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-black bg-opacity-95 z-50 w-1/2 transform transition-transform duration-300 ease-in-out ${
          isMobileNavVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center mt-20 p-6">
          {["home", "about", "projects", "contact"].map((section) => (
            <button
              key={section}
              className={`my-4 text-white text-lg hover:bg-opacity-35 hover:bg-gray-700 py-2 px-4 rounded-md ${
                activeSection === section ? "bg-gradient-to-r from-orange-600 to-orange-400 bg-opacity-35" : ""
              }`}
              onClick={() => smoothScroll(section)}
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
