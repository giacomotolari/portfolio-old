/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Navbar from './Navbar';
// import Images from '../../data/images.json';



const Header = () => {
  return (
    <div className='Header'>
      {/* <img id='logo' src={Images.logo} alt='logo' /> */}

      {/* BURGER MENU  */}

  
      <Navbar />
    </div>
  );
};

export default Header;
