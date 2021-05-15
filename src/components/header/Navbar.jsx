/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

function displayHome() {
  // NAVBAR-HOME STYLE
  document.getElementById('navHome').style.color = 'red';
  document.getElementById('navHome').style['font-size'] = '200%';
  document.getElementById('navProjects').style.color = '#fdb827';
  document.getElementById('navProjects').style['font-size'] = '100%';
  document.getElementById('navAbout').style.color = '#fdb827';
  document.getElementById('navAbout').style['font-size'] = '100%';
  document.getElementById('navContact').style.color = '#fdb827';
  document.getElementById('navContact').style['font-size'] = '100%';
  // HOME-BACKGROUND STYLE

  // HOME-FOOTER STYLE
  document.getElementById('iconsWrapper').style.display = 'block';
}
function displayProjects() {
  // NAVBAR-PROJECTS STYLE
  document.getElementById('navHome').style.color = '#fdb827';
  document.getElementById('navHome').style['font-size'] = '100%';
  document.getElementById('navProjects').style.color = 'red';
  document.getElementById('navProjects').style['font-size'] = '200%';
  document.getElementById('navAbout').style.color = '#fdb827';
  document.getElementById('navAbout').style['font-size'] = '100%';
  document.getElementById('navContact').style.color = '#fdb827';
  document.getElementById('navContact').style['font-size'] = '100%';
  // PROJECTS-BACKGROUND STYLE

  // PROJECT-FOOTER STYLE
  document.getElementById('iconsWrapper').style.display = 'block';
}

function displayAbout() {
  // NAVBAR-ABOUT STYLE
  document.getElementById('navHome').style.color = '#fdb827';
  document.getElementById('navHome').style['font-size'] = '100%';
  document.getElementById('navProjects').style.color = '#fdb827';
  document.getElementById('navProjects').style['font-size'] = '100%';
  document.getElementById('navAbout').style.color = 'red';
  document.getElementById('navAbout').style['font-size'] = '200%';
  document.getElementById('navContact').style.color = '#fdb827';
  document.getElementById('navContact').style['font-size'] = '100%';
  // ABOUT-BACKGROUND STYLE
}

function displayContact() {
  // NAVBAR-CONTACT STYLE
  document.getElementById('navHome').style.color = '#fdb827';
  document.getElementById('navHome').style['font-size'] = '100%';
  document.getElementById('navProjects').style.color = '#fdb827';
  document.getElementById('navProjects').style['font-size'] = '100%';
  document.getElementById('navAbout').style.color = '#fdb827';
  document.getElementById('navAbout').style['font-size'] = '100%';
  document.getElementById('navContact').style.color = 'red';
  document.getElementById('navContact').style['font-size'] = '200%';
  // CONTACT-BACKGROUND STYLE

  // CONTACT-FOOTER STYLE
  document.getElementById('iconsWrapper').style.display = 'block';
}

function displayBurger() {
  // FOOTER STYLE
  document.getElementById('Footer').style.justifyContent = 'center';
  document.getElementById('Footer').style.position = 'relative';
}

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav className='navBar-components'>
        <ul className='navbarUl navbarUlColumn'>
          <li onClick={displayHome}>
            <Link id='navHome' className='navLink' to='/'>
              HOME
            </Link>
          </li>
          <li onClick={displayProjects}>
            <Link id='navProjects' className='navLink' to='/projects'>
              PROJECTS
            </Link>
          </li>
          <li onClick={displayAbout}>
            <Link id='navAbout' className='navLink' to='/about'>
              ABOUT
            </Link>
          </li>

          <li onClick={displayContact}>
            <Link id='navContact' className='navLink' to='/contact'>
              CONTACT
            </Link>
          </li>
        </ul>
        <Link onClick={displayBurger} className='burgerIcon' to='/burgermenu'>
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
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
