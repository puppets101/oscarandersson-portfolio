import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SocialFollow from "./SocialFollow";
import profileImg from "../assets/unnamed.png";

function Navbar() {
  const [active, setActive] = useState(false);

  const onMenuClick = () => {
    setActive(!active);
  };
  return (
    <header className='bg-green-800 bg-opacity-80 relative'>
      <div className='max-w-7xl mx-auto flex items-center justify-between p-2.5'>
        <div
          onClick={onMenuClick}
          className={`
          text-gray-200 cursor-pointer
        md:hidden uppercase
        `}
        >
          Menu <i className='fas fa-angle-down'></i>
        </div>
        <nav
          className={`
          ${!active && "hidden"}
          absolute flex flex-col top-full w-full left-0 z-20
          md:static md:w-auto md:flex-row md:flex
        `}
        >
          <div className='md:flex-row md:flex'>
            <div className='md:mr-4'>
              <NavLink
                to='/'
                exact
                activeClassName='text-gray-200'
                className='flex w-full text-xl font-bold uppercase hover:text-gray-200 cursor-pointer py-4 px-4'
              >
                Oscar Andersson
              </NavLink>
            </div>
            <div className='md:mr-4'>
              <NavLink
                to='/skills'
                exact
                activeClassName='text-gray-200'
                className='flex w-full text-xl font-bold uppercase hover:text-gray-200 cursor-pointer py-4 px-4'
              >
                Skills
              </NavLink>
            </div>
            <div className='md:mr-4'>
              <NavLink
                to='/about'
                exact
                activeClassName='text-gray-200'
                className='flex w-full text-xl font-bold uppercase hover:text-gray-200 cursor-pointer py-4 px-4'
              >
                About
              </NavLink>
            </div>
            <div className='md:mr-4'>
              <NavLink
                to='/contact'
                exact
                activeClassName='text-gray-200'
                className='flex w-full text-xl font-bold uppercase hover:text-gray-200 cursor-pointer py-4 px-4'
              >
                Contact
              </NavLink>
            </div>
          </div>
        </nav>
        <div className='py-5 px-5'>
          <SocialFollow />
        </div>
      </div>
    </header>
  );
}

// inline-flex items-center py-8 px-3 lg:mr-4 sm:mr-2 hover:text-gray-200 text-2xl font-bold font tracking-widest

export default Navbar;
