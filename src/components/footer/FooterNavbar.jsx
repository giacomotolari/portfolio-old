/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';

const FooterNavbar = () => {
  return (
    <ul className='navBarFooter' id='navBarFooter'>
      <li>
        <NavLink id='navSkills' className='navLink' to='/skills'>
          Skills
        </NavLink>
      </li>
      <li>
        <a
          className='navLink'
          href='https://www.canva.com/design/DAEvPnMB4Q4/XsYZ7VDnezevjvMAM3eMrA/view?utm_content=DAEvPnMB4Q4&utm_campaign=designshare&utm_medium=link&utm_source=viewer'
          target='blank'
        >
          CV
        </a>
      </li>
    </ul>
  );
};

export default FooterNavbar;
