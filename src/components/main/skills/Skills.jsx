/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

const Skills = () => {
  return (
    <div className='Skills'>
      <div className='skillsLogo gitHubLogo'></div>
      <div className='skillsLogo bootstrapLogo'></div>
      <div className='skillsLogo sassLogo'></div>
      <div className='skillsLogo reactLogo'></div>
      <div className='skillsLogo javaScriptLogo'></div>
      <div className='skillsLogo htmlLogo'></div>
      <div className='skillsLogo cssLogo'></div>
      <div className='skillsLogo linuxLogo'></div>
      <div className='skillsLogo windowsLogo'></div>
      <div className='skillsLogo vsLogo'></div>
      <div className='skillsLogo gimpfLogo'></div>
      <div className='brain'></div>
      <section className='skillsLists'>
        
        <ul className='informatic'>
        <h4>Informatic</h4>
          <li>Linux / Ubuntu</li>
          <li>Windows / Android</li>
          <li>Git / GitHUb</li>
          <li>Terminal / Bash</li>
          <li>Gimp</li>
          <li>Visual Studio Code</li>
        </ul>
        <ul className='frontEnd'>
        <h4>Front End</h4>
          <li>HTML5</li>
          <li>CSS3 / SASS / BOOTSTRAP</li>
          <li>JavaSript / REACT JS</li> 
        </ul>
        <ul className='languages'>
        <h4>Languages</h4>
          <li>Italian</li>
          <li>German</li>
          <li>English</li>
          <li>Spanish</li>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
