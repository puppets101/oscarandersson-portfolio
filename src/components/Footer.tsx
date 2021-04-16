import React from "react";
import SocialFollow from "./SocialFollow";

function Footer() {
  return (
    <div className="max-w-5xl mx-auto flex justify-center items-center">
      <div className="w-2/3 flex flex-col p-2">
        <p className="p-4 text-xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          ipsa voluptas itaque sunt, optio suscipit exercitationem placeat
          labore magnam ipsum?
        </p>
      </div>
      <div className="w-1/3 flex justify-center items-center text-2xl">
        <SocialFollow />
      </div>
    </div>
  );
}

export default Footer;
