/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

function displayContactBurger() {
  // NAVBAR-CONTACT STYLE

  // CONTACT-BACKGROUND STYLE

  // CONTACT-FOOTER STYLE
  document.getElementById('iconsWrapper').style.display = 'none';
}

const BurgerMenu = () => {
  return (
    <div className='BurgerMenu'>
      <ul className='navbarBurgerMenu'>
        <li>
          <Link id='navHome' className='navLinkBurgerMenu' to='/home'>
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
          <Link
            onClick={displayContactBurger}
            id='navContact'
            className='navLinkBurgerMenu'
            to='/contact'
          >
            CONTACT
          </Link>
        </li>
        <li>
          <Link id='navSkills' className='navLinkBurgerMenu' to='/skills'>
            SKILLS
          </Link>
        </li>
        <li>
          <Link
            id='navCurriculum'
            className='navLinkBurgerMenu'
            to='/curriculum'
          >
            CV
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
