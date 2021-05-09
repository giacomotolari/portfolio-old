/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutNavbar from './AboutNavbar';
import Skills from './Skills';
import Curriculum from './Curriculum';

const About = () => {
  return (
    <div className='About'>
   

      <AboutNavbar />
      <Switch>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/curriculum'>
          <Curriculum />
        </Route>
      </Switch>
      <div className='about-wrapper'>
   
      </div>
    </div>
  );
};

export default About;
