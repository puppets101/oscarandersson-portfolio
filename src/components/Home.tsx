import React from "react";
import { Link } from "react-scroll";
import Hero from "../assets/showcaseHero.jpeg";
import WelcomeMessage from "./WelcomeMessage";

interface Id {
  id: string;
}

function Home(props: Id) {
  return (
    <div id={props.id} className="min-h-full bg-gray-100">
      <div className="h-screen flex flex-col">
        <div
          className="relative flex flex-col items-center justify-center h-full bg-cover bg-center bg-fixed bg-no-repeat"
          style={{ backgroundImage: `url(${Hero})` }}
        >
          <WelcomeMessage />
          <div className="my-4 px-2 text-white text-center z-10">
            <h5>
              Aspiring Front End Developmer studying at Medieinstitutet in
              Gothenburg.
            </h5>
          </div>
          <div className="absolute bottom-12 text-white text-center z-10">
            <span className="cursor-pointer hover:text-green-600 hover:text-opacity-60">
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-96}
              >
                <i className="fas fa-angle-down fa-3x"></i>
              </Link>
            </span>
          </div>
          <div className="z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-40"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
