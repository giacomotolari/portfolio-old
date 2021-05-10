/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
// import navbarfunctions from './navbarFunctions.js';

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
  // document.getElementById('app-background').style.backgroundImage = 'block';
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
  // document.getElementById('app-background').style.backgroundImage = 'none';
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
  // document.getElementById('app-background').style.backgroundImage = 'none';
  // ABOUT-FOOTER STYLE
  // document.getElementById('iconsWrapper').style.display = 'none';
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
  // document.getElementById('app-background').style.backgroundImage = 'none';
  // CONTACT-FOOTER STYLE
  document.getElementById('iconsWrapper').style.display = 'block';
}

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav className='navBar-components'>
        <ul className='navbarUl navbarUlColumn'>
          <li onClick={displayHome}>
            <Link id='navHome' className='navLink' to='/home'>
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
        <Link to='/burgermenu'>
          <svg
            id='menu-icon'
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

      {/* linkedin icon */}
      {/* <a className="navLink" href="/" target="blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
      </a> */}

      {/* xing icon */}

      {/* <a className="navLink" href="/" target="blank">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="16" height="16"
          viewBox="0 0 16 16"
          fill="currentcolor"><path d="M 11.394531 1 C 11.160156 1 10.925781 1.089844 10.769531 1.214844 C 10.617188 1.339844 10.535156 1.476563 10.480469 1.578125 C 10.480469 1.578125 10.476563 1.578125 10.476563 1.578125 C 10.464844 1.59375 9.425781 3.222656 8.359375 4.894531 C 8.34375 4.917969 8.332031 4.933594 8.316406 4.957031 C 8.25 4.835938 8.195313 4.734375 8.125 4.605469 C 7.847656 4.09375 7.570313 3.585938 7.570313 3.585938 C 7.566406 3.578125 7.5625 3.574219 7.5625 3.570313 C 7.441406 3.367188 7.105469 3 6.625 3 L 4.8125 3 C 4.589844 3 4.316406 3.074219 4.148438 3.332031 C 4.148438 3.332031 4.148438 3.332031 4.148438 3.335938 C 3.980469 3.589844 4.027344 3.910156 4.140625 4.109375 L 5.09375 5.855469 L 3.117188 8.84375 C 3.113281 8.855469 3.105469 8.867188 3.097656 8.882813 C 2.972656 9.109375 2.964844 9.421875 3.117188 9.65625 C 3.121094 9.660156 3.121094 9.660156 3.121094 9.660156 C 3.257813 9.867188 3.519531 10 3.773438 10 L 5.632813 10 C 5.871094 10 6.105469 9.90625 6.257813 9.78125 C 6.375 9.6875 6.445313 9.589844 6.5 9.503906 C 6.535156 9.554688 6.550781 9.582031 6.585938 9.640625 C 6.859375 10.0625 7.222656 10.625 7.585938 11.1875 C 8.304688 12.304688 9.007813 13.398438 9.019531 13.421875 C 9.140625 13.625 9.46875 14 9.957031 14 L 11.765625 14 C 11.996094 14 12.273438 13.898438 12.425781 13.664063 C 12.585938 13.417969 12.558594 13.101563 12.445313 12.886719 C 12.4375 12.875 12.429688 12.863281 12.421875 12.851563 L 9.71875 8.65625 L 13.882813 2.148438 C 13.890625 2.132813 13.898438 2.121094 13.90625 2.109375 C 14.015625 1.890625 14.039063 1.582031 13.882813 1.339844 C 13.726563 1.097656 13.453125 1 13.222656 1 Z M 11.394531 2 L 12.785156 2 L 8.726563 8.351563 C 8.699219 8.382813 8.65625 8.476563 8.65625 8.476563 C 8.65625 8.476563 8.625 8.65625 8.625 8.65625 C 8.625 8.660156 8.664063 8.859375 8.664063 8.859375 C 8.667969 8.863281 8.769531 9.015625 8.773438 9.015625 L 8.703125 8.933594 L 11.328125 13 L 9.957031 13 C 9.890625 13 9.945313 13.023438 9.886719 12.921875 C 9.882813 12.914063 9.878906 12.90625 9.875 12.902344 C 9.875 12.902344 9.148438 11.773438 8.425781 10.648438 C 8.0625 10.085938 7.703125 9.523438 7.429688 9.101563 C 7.3125 8.917969 7.222656 8.773438 7.148438 8.65625 C 7.171875 8.613281 7.167969 8.621094 7.199219 8.570313 C 7.328125 8.371094 7.503906 8.09375 7.710938 7.769531 C 8.125 7.121094 8.664063 6.273438 9.203125 5.429688 C 10.273438 3.75 11.328125 2.101563 11.328125 2.101563 C 11.335938 2.09375 11.339844 2.089844 11.34375 2.082031 C 11.378906 2.019531 11.390625 2.003906 11.394531 2 Z M 5.21875 4 L 6.625 4 C 6.699219 4 6.636719 3.972656 6.695313 4.078125 C 6.703125 4.089844 6.972656 4.578125 7.25 5.085938 C 7.386719 5.339844 7.527344 5.597656 7.632813 5.789063 C 7.648438 5.816406 7.65625 5.832031 7.671875 5.855469 C 7.605469 5.957031 7.582031 5.992188 7.46875 6.171875 C 7.265625 6.484375 7 6.890625 6.742188 7.296875 C 6.21875 8.101563 5.703125 8.894531 5.703125 8.894531 C 5.699219 8.902344 5.695313 8.910156 5.691406 8.917969 C 5.65625 8.976563 5.632813 9.003906 5.632813 9.007813 C 5.628906 9.007813 5.660156 9 5.632813 9 L 4.214844 9 L 6.09375 6.160156 C 6.105469 6.144531 6.117188 6.125 6.125 6.109375 C 6.132813 6.09375 6.144531 6.066406 6.15625 6.03125 C 6.167969 5.992188 6.179688 5.882813 6.179688 5.882813 C 6.179688 5.878906 6.167969 5.769531 6.15625 5.730469 C 6.144531 5.691406 6.132813 5.667969 6.125 5.652344 C 6.121094 5.644531 6.117188 5.640625 6.117188 5.632813 Z" /></svg>
      </a> */}

      {/* mail */}

      {/* <a
        className="navLink"
        href="mailto:giacomotolari@gmail.com"
        target="blank"
      >
        <spam id="g-mail">giacomotolari@gmail.com</spam>
      </a> */}
    </div>
  );
};

export default Navbar;
