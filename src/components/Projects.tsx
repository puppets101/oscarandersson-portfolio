import React from "react";
import Typewriter from "typewriter-effect";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col my-12">
      <div
        id="projects"
        className="max-w-5xl mx-auto flex flex-row justify-center items-center bg-gray-100 my-16"
      >
        <section className="container mx-auto">
          <h2 className="text-4xl font-bold">
            <Typewriter
              onInit={(typewriter: any) => {
                typewriter.typeString("Projects").start();
              }}
            />
          </h2>
          <p className="text-gray-800 font-semi-bold mb-6 mt-2 p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            maxime?
          </p>
          <div>
            <ProjectCard />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
