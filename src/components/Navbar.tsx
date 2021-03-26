import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SocialFollow from "./SocialFollow";

function Navbar() {
  const [active, setActive] = useState(false);

  const onMenuClick = () => {
    setActive(!active);
  };
  return (
    <header className='bg-green-800 bg-opacity-80 absolute z-10 w-full'>
      <div className='max-w-7xl mx-auto flex items-center justify-between p-2.5'>
        <div
          onClick={onMenuClick}
          className={`
          text-gray-200 cursor-pointer py-4 px-4
        md:hidden uppercase
        `}
        >
          <i className='fas fa-angle-down fa-2x'></i>
        </div>
        <nav
          className={`
          ${active ? "bg-green-800 opacity-80" : "hidden"}
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
                className='flex w-full text-xl font-bold uppercase hover:text-gray-300 cursor-pointer py-1 px-4'
              >
                Oscar Andersson
              </NavLink>
            </div>
            <div className='md:mr-4'>
              <NavLink
                to='/about'
                exact
                activeClassName='text-gray-200'
                className='flex w-full text-xl font-bold uppercase hover:text-gray-300 cursor-pointer py-1 px-4'
              >
                About
              </NavLink>
            </div>
            <div className='md:mr-4'>
              <NavLink
                to='/skills'
                exact
                activeClassName='text-gray-200'
                className='flex w-full text-xl font-bold uppercase hover:text-gray-300 cursor-pointer py-1 px-4'
              >
                Skills
              </NavLink>
            </div>
            <div className='md:mr-4'>
              <NavLink
                to='/contact'
                exact
                activeClassName='text-gray-200'
                className='flex w-full text-xl font-bold uppercase hover:text-gray-300 cursor-pointer py-1 px-4'
              >
                Contact
              </NavLink>
            </div>
          </div>
        </nav>
        <div className=' text-gray-200 py-5 px-5'>
          <SocialFollow />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
