/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Projects from './projects/Projects';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Curriculum from './Curriculum';
import Home from './Home';

const Main = () => {
  

  return (
    <div className='Main'>
      <Routes>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/curriculum' element={<Curriculum />}></Route>
        <Route exact path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default Main;
