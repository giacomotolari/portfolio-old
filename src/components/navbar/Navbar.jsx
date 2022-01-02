/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import FooterIcons from '../footer/FooterIcons';

const Navbar = () => {
  const { burgerMenu, setBurgerMenu, devices } = useTheme();

  const burgerMenuToggle = () => {
    if (devices.burgerMenu && burgerMenu === false) {
      setBurgerMenu(true);
    }
    if (devices.burgerMenu && burgerMenu === true) {
      setBurgerMenu(false);
    }
  };

  return (
    <div className='Navbar'>
      {!devices.burgerMenu || burgerMenu === true ? (
        <ul className={!burgerMenu ? 'navBar' : 'burgerMenu'}>
          <li onClick={burgerMenuToggle}>
            <NavLink className='navLink' to='/'>
              HOME
            </NavLink>
          </li>
          <li onClick={burgerMenuToggle}>
            <NavLink className='navLink' to='/projects'>
              PROJECTS
            </NavLink>
          </li>
          <li onClick={burgerMenuToggle}>
            <NavLink className='navLink' to='/about'>
              ABOUT
            </NavLink>
          </li>

          <li onClick={burgerMenuToggle}>
            <NavLink className='navLink' to='/contact'>
              CONTACT
            </NavLink>
          </li>
          {burgerMenu && (
            <>
              <li>
                <NavLink
                  onClick={burgerMenuToggle}
                  className='navLink'
                  to='/skills'
                >
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
              <li className='BurgerMenuIcons'>
                <FooterIcons />
              </li>
            </>
          )}
        </ul>
      ) : (
        devices.burgerMenu &&
        !burgerMenu === true && (
          <div
            onClick={burgerMenuToggle}
            className='burgerIcon'
            to='/burgermenu'
          >
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
        )
      )}
      {devices.burgerMenu && burgerMenu === true && (
        <p className='burgerX' onClick={burgerMenuToggle}>
          X
        </p>
      )}
    </div>
  );
};

export default Navbar;
