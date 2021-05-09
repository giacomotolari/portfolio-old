/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';


const BurgerMenu = () => {
  return (
    <div className='BurgerMenu'>
      
        <ul className='navbarBurgerMenu'>
          <li>
            <Link id='navHome' className='navLinkBurgerMenu' to='home'>
              HOME
            </Link>
          </li>
          <li>
          <Link id='navProjects' className='navLinkBurgerMenu' to='/projects'>
              PROJECTS
            </Link>
          </li>
          <li>
            <Link id='navAbout' className='navLinkBurgerMenu' to='/about'>
              ABOUT
            </Link>
          </li>

          <li>
            <Link id='navContact' className='navLinkBurgerMenu' to='/contact'>
              CONTACT
            </Link>
          </li>
        </ul>
        
      
    </div>
  );
};

export default BurgerMenu;
