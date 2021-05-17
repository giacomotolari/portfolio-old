/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

function displaySkills() {
  // NAVBAR-ABOUT STYLE
  document.getElementById('navSkills').style.color = 'red';
  document.getElementById('navSkills').style['font-size'] = '150%';
  document.getElementById('navHome').style.color = '#fdb827';
  document.getElementById('navHome').style['font-size'] = '100%';
  document.getElementById('navProjects').style.color = '#fdb827';
  document.getElementById('navProjects').style['font-size'] = '100%';
  document.getElementById('navAbout').style.color = '#fdb827';
  document.getElementById('navAbout').style['font-size'] = '100%';
  document.getElementById('navContact').style.color = '#fdb827';
  document.getElementById('navContact').style['font-size'] = '100%';
  document.getElementById('navCurriculum').style.color = '#fdb827';
  document.getElementById('navCurriculum').style['font-size'] = '100%';
  // ABOUT-BACKGROUND STYLE
}

function displayCurriculum() {
  // NAVBAR-ABOUT STYLE
  document.getElementById('navSkills').style.color = '#fdb827';
  document.getElementById('navSkills').style['font-size'] = '100%';
  document.getElementById('navCurriculum').style.color = 'red';
  document.getElementById('navCurriculum').style['font-size'] = '150%';
  document.getElementById('navHome').style.color = '#fdb827';
  document.getElementById('navHome').style['font-size'] = '100%';
  document.getElementById('navProjects').style.color = '#fdb827';
  document.getElementById('navProjects').style['font-size'] = '100%';
  document.getElementById('navAbout').style.color = '#fdb827';
  document.getElementById('navAbout').style['font-size'] = '100%';
  document.getElementById('navContact').style.color = '#fdb827';
  document.getElementById('navContact').style['font-size'] = '100%';
  // ABOUT-BACKGROUND STYLE
}

const FooterNavbar = () => {
  return (
    <nav className='navBarFooter' id='navBarFooter'>
      <ul>
        <li onClick={displaySkills}>
          <Link id='navSkills' className='navLink' to='/skills'>
            Skills
          </Link>
        </li>
        <li onClick={displayCurriculum}>
          <Link id='navCurriculum' className='navLink' to='/curriculum'>
            CV
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavbar;
