import React from "react";
import Typewriter from "typewriter-effect";
import ProjectCard from "./ProjectCard";

interface Id {
  id: string;
}

function Projects(props: Id) {
  return (
    <div className="flex flex-col my-12">
      <div
        id={props.id}
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
            Have a look on a few of the projects I've created together with some
            of my classmates. For more projects, please visit my{" "}
            <a
              href="https://github.com/puppets101"
              target="_blank"
              rel="noreferrer"
              className="text-green-600"
            >
              GitHub
            </a>{" "}
            page.
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
