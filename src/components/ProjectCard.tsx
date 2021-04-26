import React from "react";
import bhaggy from "../assets/projectImgs/bhagwanyoga.png";
import guessMyNumber2 from "../assets/projectImgs/guessmynumber2.png";
import cyberjump from "../assets/projectImgs/cyberjump.png";
import geographica from "../assets/projectImgs/geographica.png";

function ProjectCard() {
  return (
    <div className="grid md:grid-cols-2 gap-y-12 gap-x-4 mb-16">
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
              className="object-cover h-full w-full hover:shadow-lg"
            />
          </a>
          <span className="flex justify-center mt-2">
            <p className="font-light italic">
              E-commerce website created using React
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
              className="object-cover h-full w-full hover:shadow-lg"
            />
          </a>
          <span className="flex justify-center mt-2">
            <p className="font-light italic">
              Map application created using MapBox API
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
              src={guessMyNumber2}
              alt="Guess my number game"
              className="object-fit h-full w-full hover:shadow-lg"
            />
          </a>
          <span className="flex justify-center mt-2">
            <p className="font-light italic">
              Guessing Game created using vanilla JS
            </p>
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
              className="object-fit h-full w-full hover:shadow-lg"
            />
          </a>
          <span className="flex justify-center mt-2">
            <p className="font-light italic">Game created using p5.js</p>
          </span>
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;
