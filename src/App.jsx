import React from "react";
import Navbar from "./Header-Footer/Navbar.jsx";
import Sec_1 from "./Pages/Sec_1.jsx";
import Sec_2 from "./Pages/Sec_2.jsx";
import Sec_3 from "./Pages/Sec_3.jsx";
import Sec_4 from "./Pages/Sec_4.jsx";
import Footer from "./Header-Footer/Footer.jsx";

function App() {
  return (
    <div className="min-w-[70vh] scroll-smooth">
      <Navbar />
      <section id="home" className="min-w-full sm:min-w-140vh">
        <Sec_1 />
      </section>
      <section id="about" className="min-w-full">
        <Sec_2 />
      </section>
      <section id="projects" className="min-w-full">
        <Sec_3 />
      </section>
      <section id="contact" className="min-w-full">
        <Sec_4 />
      </section >
      <Footer />
    </div>
  );
}

export default App;
