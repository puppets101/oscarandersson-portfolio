import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function SocialFollow() {
  return (
    <div className='text-gray-200'>
      <a
        href='https://github.com/puppets101'
        target='_blank'
        rel='noreferrer'
        className='mr-2 hover:text-gray-400'
      >
        <FontAwesomeIcon icon={faGithub} size='2x' />
      </a>
      <a
        href='https://linkedin.com/in/oscar-andersson-320928208'
        target='_blank'
        rel='noreferrer'
        className='mr-2 hover:text-gray-400'
      >
        <FontAwesomeIcon icon={faLinkedin} size='2x' />
      </a>
    </div>
  );
}

export default SocialFollow;
