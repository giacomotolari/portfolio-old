/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav className='navBar-components'>
        <ul className='navbarUl navbarUlColumn'>
          <li>
            <NavLink id='navHome' className='navLink' to='/'>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink id='navProjects' className='navLink' to='/projects'>
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink id='navAbout' className='navLink' to='/about'>
              ABOUT
            </NavLink>
          </li>

          <li>
            <NavLink id='navContact' className='navLink' to='/contact'>
              CONTACT
            </NavLink>
          </li>
        </ul>
        <div className='burgerIcon' to='/burgermenu'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            className='bi bi-list'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
            />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
