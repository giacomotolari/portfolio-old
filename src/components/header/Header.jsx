/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Navbar from './Navbar';
import Images from '../../data/images.json';

const Header = () => {
  return (
    <div className='Header'>
      <img id='logo' src={Images.logo} alt='logo' />

      {/* BURGER MENU  */}

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
      <Navbar />
    </div>
  );
};

export default Header;
