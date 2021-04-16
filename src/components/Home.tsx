import React from "react";
import Hero from "../assets/showcaseHero.jpeg";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import WelcomeMessage from "./WelcomeMessage";

function Home() {
  return (
    <div className="min-h-full bg-gray-100">
      <div className="h-screen flex flex-col">
        <div
          className="relative flex items-center justify-center h-full bg-cover bg-center bg-fixed bg-no-repeat"
          style={{ backgroundImage: `url(${Hero})` }}
        >
          <WelcomeMessage />
          <div className="z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-40"></div>
        </div>
      </div>
      <div className="h-screen flex flex-col">
        <About />
      </div>
      <div className="h-screen flex flex-col">
        <Skills />
      </div>
      <div className="h-96 bg-black text-white p-6 flex justify-center items-center flex-col">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
