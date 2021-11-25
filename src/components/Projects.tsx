import React from "react";
import { projects } from "../projects";
import Project from "./Project";
import TypingTitle from "./TypingTitle";

interface Id {
  id: string;
}
function Projects(props: Id) {
  return (
    <div className="my-12 max-w-5xl mx-auto">
      <div id={props.id} className="bg-gray-100 px-1 sm:px-4">
        <section className="container mx-auto">
          <TypingTitle title="Projects" classes="text-4xl font-bold" />
          <p className="text-gray-800 font-light mb-6 mt-2 p-4">
            Please, have a look on some of my project I've developed up to this
            point. For more samples, visit my{" "}
            <a
              href="https://github.com/puppets101"
              target="_blank"
              rel="noreferrer"
              className="text-green-600 italic"
            >
              GitHub
            </a>{" "}
            page.
          </p>
          <div className="grid md:grid-cols-2 gap-y-12 gap-x-4 mb-16">
            {projects.map((project) => (
              <Project
                key={project.id}
                description={project.description}
                url={project.url}
                img={project.img}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
