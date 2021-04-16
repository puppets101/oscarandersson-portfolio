import React from "react";
import Typewriter from "typewriter-effect";
import SocialFollow from "./SocialFollow";

function Skills() {
  return (
    <div
      id="about"
      className="max-w-5xl mx-auto flex flex-row justify-center items-center h-full w-full bg-gray-100"
    >
      <div style={{ width: "40%" }} className="flex justify-center mt-16">
        <div className="border-8 border-gray-300 border-opacity-60 rounded-sm">
          <img
            style={{ height: "30rem" }}
            src={
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
            }
            alt="Me"
            className="object-cover"
          />
        </div>
      </div>
      <div style={{ width: "60%" }} className="ml-6">
        <h1 className="text-xl font-bold">
          <Typewriter
            onInit={(typewriter: any) => {
              typewriter.typeString("Skills").start();
            }}
          />
        </h1>
        <div className="flex justify-between items-center">
          <div className="p-4">
            <p className="p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              facilis quae enim quo excepturi consectetur accusantium?
              Voluptatum odio explicabo esse, excepturi soluta aliquam suscipit
              totam consequatur quam nisi vero laboriosam, dolorem praesentium
              atque, eos impedit expedita non enim et quaerat quisquam? Modi et
              possimus neque asperiores eligendi velit eius ipsum.
            </p>
            <p className="p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              ipsam quaerat facilis quibusdam corrupti nisi cupiditate rem
              expedita quidem pariatur.
            </p>
          </div>
        </div>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, maxime?
        </p>
        <div className="mt-2 text-green-700">
          <SocialFollow />
        </div>
      </div>
    </div>
  );
}

export default Skills;
