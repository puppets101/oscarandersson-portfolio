import React from "react";
import SocialIcon from "./SocialIcon";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="h-96 bg-black text-white p-6 flex justify-center items-center flex-col">
      <div className="max-w-5xl mx-auto flex justify-center items-center">
        <div className="w-2/3 flex flex-col p-2">
          <p className="p-4 text-xl font-light">
            If you are keen to get to know me further. Please, send me an
            <a
              href="mailto: oscand92@gmail.com"
              className="mx-1 hover:text-green-600 hover:text-opacity-60 italic"
            >
              email
            </a>{" "}
            or contact me on{" "}
            <a
              href="https://linkedin.com/in/oscar-andersson-320928208"
              target="_blank"
              rel="noreferrer"
              className="mx-1 hover:text-green-600 hover:text-opacity-60 italic"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
        <div className="w-1/3 flex justify-center items-center text-2xl">
          <SocialIcon
            url="https://github.com/puppets101"
            icon={faGithub}
            size="2x"
          />
          <SocialIcon
            url="https://linkedin.com/in/oscar-andersson-320928208"
            icon={faLinkedin}
            size="2x"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
