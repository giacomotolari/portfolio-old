/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

const AboutNavbar = () => {
  return (
    <nav className='navBar-about'>
      <ul className='navbarUlAbout'>
        {/* <li onClick={displaySkills}> */}
        <li>
          <Link id='navSkills' className='navLink' to='/skills'>
            Skills
          </Link>
        </li>
        {/* <li onClick={displayCurriculum}> */}
        <li>
          <Link id='navProjects' className='navLink' to='/curriculum'>
            Curriculum
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AboutNavbar;
