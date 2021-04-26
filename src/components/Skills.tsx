import React from "react";
import Typewriter from "typewriter-effect";

interface Id {
  id: string;
}

function Skills(props: Id) {
  return (
    <div className="my-12 max-w-5xl mx-auto">
      <div id={props.id} className="bg-gray-100 px-1 sm:px-4">
        <section className="container block md:flex md:flex-row-reverse mx-auto">
          <div className="md:w-2/3 md:ml-8">
            <h1 className="text-4xl font-bold">
              <Typewriter
                onInit={(typewriter: any) => {
                  typewriter.typeString("Skills").start();
                }}
              />
            </h1>
            <div>
              <div>
                <p className="p-4 font-light leading-relaxed">
                  At Medieinstitutets Front End Developer program, I study web
                  techniques that are required to produce advanced web pages. I
                  will learn the fundamentals of HTML, CSS, JavaScript and
                  TypeScript along with web design, user access abilities/UX,
                  responsive design, and mobile web applications in Front End
                  Libraries like React. I will also learn the fundamentals of
                  Back End technologies like Node.js, Express, and MongoDB.{" "}
                  <br />
                  <br /> If you would like a more detailed explanation of the
                  program, please visit{" "}
                  <a
                    href="https://medieinstitutet.se/utbildningar/front-end-developer/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-600"
                  >
                    Medieinstitutet
                  </a>
                  .{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3">
            <div className="rounded-sm">
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
        </section>
      </div>
    </div>
  );
}

export default Skills;
