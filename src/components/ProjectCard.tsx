import React from "react";
import bhaggy from "../assets/projectImgs/bhagwanyoga.png";
import guessMyNumber from "../assets/projectImgs/guessmynumber.png";
import cyberjump from "../assets/projectImgs/cyberjump.png";
import geographica from "../assets/projectImgs/geographica.png";

function ProjectCard() {
  return (
    <div className="grid md:grid-cols-2 gap-y-12 gap-x-4">
      <div>
        <span className="block rounded shadow h-80 w-full">
          <a
            href="https://bhagwanyoga.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={bhaggy}
              alt="E-commerce website"
              className="object-cover h-full w-full"
            />
          </a>
          <span className="flex justify-center mt-2">
            <p className="font-light italic">
              E-commerce website for yoga products
            </p>
          </span>
        </span>
      </div>
      <div>
        <span className="block rounded shadow h-80 w-full">
          <a
            href="https://geographica.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={geographica}
              alt="E-commerce website"
              className="object-cover h-full w-full"
            />
          </a>
          <span className="flex justify-center mt-2">
            <p className="font-light italic">
              Map application built on MapBox API
            </p>
          </span>
        </span>
      </div>
      <div>
        <span className="block rounded shadow h-80 w-full">
          <a
            href="https://antonmaenpaa.github.io/quiz-app/login.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={guessMyNumber}
              alt="Guess my number game"
              className="object-cover h-full w-full"
            />
          </a>
          <span className="flex justify-center mt-2">
            <p className="font-light italic">Number Guesser Game</p>
          </span>
        </span>
      </div>
      <div>
        <span className="block rounded shadow h-80 w-full">
          <a
            href="https://cyberjump.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={cyberjump}
              alt="p5.js game"
              className="object-cover h-full w-full"
            />
          </a>
          <span className="flex justify-center mt-2">
            <p className="font-light italic">Game built with p5.js</p>
          </span>
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;
