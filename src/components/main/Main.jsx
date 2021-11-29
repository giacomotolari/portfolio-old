/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './projects/Projects';
import About from './about/About';
import Contact from './contact/Contact';
import BurgerMenu from './BurgerMenu';
import Skills from './skills/Skills';
import Curriculum from './curriculum/Curriculum';
import Home from '../home/Home';


const Main = () => {
  return (
    <div className='Main'>
      
      {/* <p className='home-paragraph'>
        &lt;h2&gt;welcome to Giacomo's page &lt;/h2&gt;
      </p> */}
      {/* <CardGroup /> */}
      <Switch>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/burgermenu'>
          <BurgerMenu />
        </Route>
      {/* </Switch>
      <Switch> */}
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/curriculum'>
          <Curriculum />
        </Route>
        <Route exact path='/'>
        <Home />
        </Route>
      </Switch>
      
    </div>
  );
};

export default Main;
