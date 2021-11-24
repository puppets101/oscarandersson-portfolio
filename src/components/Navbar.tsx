import React, { useState } from "react";
import { Link } from "react-scroll";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SocialIcon from "./SocialIcon";

function Navbar() {
  const [active, setActive] = useState(false);
  const [navbarColored, setNavbarColored] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const onMenuClick = () => {
    setActive(!active);
  };

  const changeNavbarBg = () => {
    if (window.scrollY > 0) {
      setNavbarColored(true);
      setDropdownMenu(true);
    } else {
      setNavbarColored(false);
      setDropdownMenu(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBg);

  return (
    <header
      className={
        navbarColored
          ? "bg-black fixed z-100 w-full"
          : "bg-transparent fixed z-10 w-full"
      }
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between p-2.5">
        <div
          onClick={onMenuClick}
          className="text-gray-200 uppercase cursor-pointer py-4 px-4 md:hidden"
        >
          <i className="fas fa-angle-down fa-2x"></i>
        </div>
        <nav
          className={`
          ${active ? "bg-black-800" : "hidden"}
          absolute flex flex-col top-full w-full left-0 z-20
          md:static md:w-auto md:flex-row md:flex
        `}
        >
          <div
            className={
              dropdownMenu
                ? "nav-items md:flex-row md:flex bg-black"
                : "nav-items md:flex-row md:flex"
            }
          >
            <div className="nav-item">
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-96}
                duration={500}
                className="flex w-full text-xl font-bold uppercase text-gray-200 hover:text-gray-100 cursor-pointer py-1 px-4"
              >
                About
              </Link>
            </div>
            <div className="nav-item">
              <Link
                to="skills"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                className="flex w-full text-xl font-bold uppercase text-gray-200 hover:text-gray-100 cursor-pointer py-1 px-4"
              >
                Skills
              </Link>
            </div>
            <div className="nav-item">
              <Link
                to="projects"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                className="flex w-full text-xl font-bold uppercase text-gray-200 hover:text-gray-100 cursor-pointer py-1 px-4"
              >
                Projects
              </Link>
            </div>
          </div>
        </nav>
        <div className="text-gray-200 py-5 px-5">
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
    </header>
  );
}

export default Navbar;
