import React from "react";
import Hero from "../assets/showcaseHero.jpeg";
import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import WelcomeMessage from "./WelcomeMessage";

function Home() {
  return (
    <div id="home" className="min-h-full bg-gray-100">
      <div className="h-screen flex flex-col">
        <div
          className="relative flex items-center justify-center h-full bg-cover bg-center bg-fixed bg-no-repeat"
          style={{ backgroundImage: `url(${Hero})` }}
        >
          <WelcomeMessage />
          <div className="z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-40"></div>
        </div>
      </div>
      <div className="flex flex-col my-12">
        <About />
      </div>
      <div className="flex flex-col my-12">
        <Skills />
      </div>
      <div className="flex flex-col my-12">
        <Projects />
      </div>
      <div className="h-96 bg-black text-white p-6 flex justify-center items-center flex-col">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
