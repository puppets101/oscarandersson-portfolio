import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import SocialFollow from "./SocialFollow";

function Navbar() {
  const [active, setActive] = useState(false);
  const [navbarColored, setNavbarColored] = useState(false);

  const onMenuClick = () => {
    setActive(!active);
  };

  const changeNavbarBg = () => {
    if (window.scrollY > 0) {
      setNavbarColored(true);
    } else {
      setNavbarColored(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBg);

  return (
    <header
      className={
        navbarColored
          ? "bg-black fixed z-100 w-full"
          : `bg-transparent fixed z-10 w-full`
      }
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
        <div
          onClick={onMenuClick}
          className={`
          text-gray-200 cursor-pointer py-4 px-4
        md:hidden uppercase
        `}
        >
          <i className="fas fa-angle-down fa-2x"></i>
        </div>
        <nav
          className={`
          ${active ? "bg-black-800 opacity-80" : "hidden"}
          absolute flex flex-col top-full w-full left-0 z-20
          md:static md:w-auto md:flex-row md:flex
        `}
        >
          <div className="nav-items md:flex-row md:flex">
            <div className="nav-item md:mr-4">
              <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                className="flex w-full text-xl font-bold uppercase text-gray-200 hover:text-gray-100 cursor-pointer py-1 px-4"
              >
                Oscar Andersson
              </Link>
            </div>
            <div className="nav-item md:mr-4">
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-48}
                duration={500}
                className="flex w-full text-xl font-bold uppercase text-gray-200 hover:text-gray-100 cursor-pointer py-1 px-4"
              >
                About
              </Link>
            </div>
            <div className="nav-item md:mr-4">
              <Link
                to="skills"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-48}
                duration={500}
                className="flex w-full text-xl font-bold uppercase text-gray-200 hover:text-gray-100 cursor-pointer py-1 px-4"
              >
                Skills
              </Link>
            </div>
            <div className="nav-item md:mr-4">
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
        <div className=" text-gray-200 py-5 px-5">
          <SocialFollow />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
