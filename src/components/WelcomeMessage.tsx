import React from "react";
import Typewriter from "typewriter-effect";

function WelcomeMessage() {
  return (
    <Typewriter
      onInit={(typewriter: any) => {
        typewriter
          .typeString("Hello. I Am Oscar.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Aspiring Front End Developer.")
          .pauseFor(1000)
          .deleteAll()
          .start()
          .typeString("Welcome to my Portfolio.");
      }}
    />
  );
}

export default WelcomeMessage;
