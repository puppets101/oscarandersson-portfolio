import React from "react";
import SocialFollow from "./SocialFollow";

function Contact() {
  return (
    <div className="max-w-5xl mx-auto flex justify-center items-center">
      <div className="w-2/3 flex flex-col">
        <div className="p-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            ipsa voluptas itaque sunt, optio suscipit exercitationem placeat
            labore magnam ipsum?
          </p>
        </div>
        <div className="p-2">
          <SocialFollow />
        </div>
      </div>
      <div className="w-1/3 flex justify-center items-center">
        <ul>
          <li>Oscar Andersson</li>
          <li>+46 73 11 22 333</li>
          <li>oscar@oscar.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
