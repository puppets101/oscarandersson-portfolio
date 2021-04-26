import React from "react";
import profileImg from "../assets/unnamed.png";
import Typewriter from "typewriter-effect";

interface Id {
  id: string;
}

function About(props: Id) {
  return (
    <div className="my-12 max-w-5xl mx-auto">
      <div id={props.id} className="bg-gray-100 px-1 sm:px-4">
        <section className="container block md:flex mx-auto">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold">
              <Typewriter
                onInit={(typewriter: any) => {
                  typewriter.typeString("About Me").start();
                }}
              />
            </h1>
            <div>
              <div>
                <p className="p-4 font-light leading-relaxed">
                  Before I began my studies to become a web developer, I've
                  spent a substantial part of my professional career in the
                  sports betting business, working for a company that provides
                  its customers to pick the best bet of the day. Here I gained
                  much confidence working on a deadline. As the publisher of the
                  company's texts, I had a lot of responsibility, providing our
                  customers with the most valuable content each day. During the
                  past three years, I've also written my picks, gaining
                  knowledge in statistics, research and writing.
                </p>
                <p className="p-4 font-light leading-relaxed">
                  Working with sports betting has prepared me for the fast-paced
                  web-development environment and, I'm looking forward to taking
                  my experience in a new line of work.
                </p>
              </div>
              <div>
                <p className="font-semi-bold text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  maxime?
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center items-center my-4">
            <div className="bg-gray-800 h-64 w-64 rounded-full"></div>
            {/* <img
              src={profileImg}
              alt="Me"
              className="object-cover object-center h-96 w-96"
            /> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
