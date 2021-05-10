/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

const AboutNavbar = () => {
  return (
    <nav className='navBarAbout'>
      <ul className='ulAbout'>
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
