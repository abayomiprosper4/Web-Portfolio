import React from "react";
import { LuLink } from "react-icons/lu";
import { assets } from "../assets";
import { FiFacebook, FiInstagram, FiGithub, FiMail, FiTwitter } from "react-icons/fi";


function Sec_4() {
  const Section4 = () => (
    <section
      id="contact"
      className="min-h-[84vh] bg-hero-pattern bg-cover bg-center bg-fixed w-full flex flex-col justify-center items-center"> 
      <a href="https://www.freepik.com/free-vector/paper-style-white-monochrome-background_15185922.htm#fromView=search&page=1&position=30&uuid=39a868c9-1f69-4b53-8845-903d05be77af"><span className="text-white">Image by freepik</span>
      </a>
      <div className="contact flex flex-col items-center text-center">
        <div className="txt03 py-8 text-4xl md:text-6xl font-semibold">
          Get In Touch <LuLink className="inline text-5xl text-orange-400" />
        </div>


        <div className="vl border-b-2 border-gray-600 w-40 h-2 my-5"></div>
        <div className="icons flex justify-center items-center space-x-6 mt-8">
          <ContactIcon href="https://web.facebook.com/prosper.abayomi.37">
            <FiFacebook className="text-3xl" />
          </ContactIcon>

          <ContactIcon href="https://www.instagram.com/world.of_p/">
            <FiInstagram className="text-3xl" /> 
          </ContactIcon>

          <ContactIcon href="https://github.com/abayomiprosper4">
            <FiGithub className="text-3xl" />
          </ContactIcon>

          <ContactIcon href="https://x.com/AbayomiPro93898">
          <img src={assets.XLogo} className="w-8 h-8" />
          </ContactIcon>

          <ContactIcon href="mailto:pablocodes3846@gmail.com">
          <FiMail className="text-3xl" />
          </ContactIcon>
        </div>
      </div>
    </section>
  );


  const ContactIcon = ({ href, children }) => (
    <a
      href={href}
      className="p-4 bg-gradient-to-br from-neutral-700 to-neutral-50 hover:ring-neutral-200 border-2 rounded-full flex items-center justify-center text-black no-underline border-none transition duration-300 ease-in-out transform hover:scale-110"
    >
      {children}
    </a>
  );

  return <Section4 />;
}

export default Sec_4;

