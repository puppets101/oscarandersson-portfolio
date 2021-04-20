import profileImg from "../assets/unnamed.png";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <div
      id="about"
      className="max-w-5xl mx-auto flex flex-row justify-center items-center h-full w-full bg-gray-100"
    >
      <div style={{ width: "60%" }}>
        <h1 className="text-4xl font-bold">
          <Typewriter
            onInit={(typewriter: any) => {
              typewriter.typeString("About Me").start();
            }}
          />
        </h1>
        <div className="flex justify-between items-center">
          <div className="p-4">
            <p className="p-4 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              facilis quae enim quo excepturi consectetur accusantium?
              Voluptatum odio explicabo esse, excepturi soluta aliquam suscipit
              totam consequatur quam nisi vero laboriosam, dolorem praesentium
              atque, eos impedit expedita non enim et quaerat quisquam? Modi et
              possimus neque asperiores eligendi velit eius ipsum.
            </p>
            <p className="p-4 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              ipsam quaerat facilis quibusdam corrupti nisi cupiditate rem
              expedita quidem pariatur.
            </p>
          </div>
        </div>
        <p className="font-semi-bold text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, maxime?
        </p>
      </div>
      <div style={{ width: "40%" }} className="flex justify-center">
        <div className="border-8 border-gray-300 border-opacity-60 rounded-sm">
          <img
            style={{ height: "30rem" }}
            src={profileImg}
            alt="Me"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
