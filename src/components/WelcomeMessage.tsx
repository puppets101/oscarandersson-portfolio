import React from "react";
import Typewriter from "typewriter-effect";

function WelcomeMessage() {
  return (
    <h1 className="relative px-2.5 text-white z-10 text-5xl sm:text-7xl md:text-8xl font-bold font-bold text-center">
      <Typewriter
        onInit={(typewriter: any) => {
          typewriter.typeString("Hello. I Am Oscar.").pauseFor(1000).start();
        }}
      />
    </h1>
  );
}

export default WelcomeMessage;
