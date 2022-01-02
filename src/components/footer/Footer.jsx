/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import FooterNavbar from './FooterNavbar';
import { useTheme } from '../../ThemeContext';
import FooterIcons from './FooterIcons';

const Footer = () => {
  const { devices } = useTheme();

  return (
    <div className='Footer'>
      {!devices.burgerMenu && <FooterIcons />}
      <FooterNavbar />
    </div>
  );
};

export default Footer;
