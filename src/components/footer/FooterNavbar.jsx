/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';




const FooterNavbar = () => {
  return (
    <nav className='navBarFooter' id='navBarFooter'>
      <ul>
        {/* <li onClick={displaySkills}> */}
        <li>
          <Link id='navSkills' className='navLink' to='/skills'>
            Skills
          </Link>
        </li>
        {/* <li onClick={displayCurriculum}> */}
        <li>
          <Link id='navCurriculum' className='navLink' to='/curriculum'>
            CV
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavbar;
