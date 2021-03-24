import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className='bg-green-800 bg-opacity-80 absolute z-10 w-full'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <div>
            <NavLink
              to='/'
              exact
              activeClassName='text-white'
              className='inline-flex items-center py-8 px-3 mr-4 hover:text-gray-200 text-2xl font-bold font tracking-widest'
            >
              OscarAndersson
            </NavLink>
          </div>
          <div>
            <NavLink
              to='/skills'
              exact
              activeClassName='text-white'
              className='inline-flex items-center py-8 px-3 mr-4 hover:text-gray-200 text-2xl font-bold font tracking-widest'
            >
              Skills
            </NavLink>
            <NavLink
              to='/about'
              exact
              activeClassName='text-white'
              className='inline-flex items-center py-8 px-3 mr-4 hover:text-gray-200 text-2xl font-bold font tracking-widest'
            >
              About
            </NavLink>
            <NavLink
              to='/contact'
              exact
              activeClassName='text-white'
              className='inline-flex items-center py-8 px-3 mr-4 hover:text-gray-200 text-2xl font-bold font tracking-widest'
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
