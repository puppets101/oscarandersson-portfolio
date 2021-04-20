import React from "react";
import bhaggy from "../assets/projectImgs/bhagwanyoga.png";
import guessMyNumber from "../assets/projectImgs/guessmynumber.png";
import cyberjump from "../assets/projectImgs/cyberjump.png";

function ProjectCard() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article>
        <span className="block h-64 rounded shadow md:border-l-8 border-gray-300 border-opacity-60 hover:border-l-12">
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
            <h4>E-commerce website</h4>
          </span>
        </span>
      </article>
      <article>
        <span className="block h-64 rounded shadow md:border-l-8 border-gray-300 border-opacity-60">
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
          <span>
            <h4 className="flex justify-center mt-2">Number guesser game</h4>
          </span>
        </span>
      </article>
      <article>
        <span className="block h-64 rounded shadow md:border-l-8 border-gray-300 border-opacity-60">
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
          <span>
            <h4 className="flex justify-center mt-2">p5.js Game</h4>
          </span>
        </span>
      </article>
    </div>
  );
}

export default ProjectCard;
