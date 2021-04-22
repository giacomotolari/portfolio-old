/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './projects/Projects';
import About from './about/About';
import Contact from './contact/Contact';
// import CardGroup from "./CardGroup";

const Main = () => {
  return (
    <div id='main-wrapper'>
       {/* <p className='home-paragraph'>
        &lt;h2&gt;welcome to Giacomo's page &lt;/h2&gt;
      </p> */}

      {/* <CardGroup /> */}

        <Switch>
          <Route path='/projects'>
            <Projects/>
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      
    </div>
  );
};

export default Main;



