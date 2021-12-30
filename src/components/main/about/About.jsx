/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import giacomoDaniela from '../../../asset/images/giacomoDaniela.jpg';

const About = () => {
  return (
    <div className='About'>
     <img src={giacomoDaniela} className='demo-bg' alt='giacomokayak' />
      <div className='spaceApparitionAbout'></div>
      <div class='about-text'>
        <p>
          I am a 30 year old guy from Italy (Sardinia), I love sport, music and
          cooking (more eating).
        </p>
        <br />
        <p>
          I like the idea of being able to work with people from all over the
          world, peole of different professions, knowing that I will never stop
          learning and that I will be able to use my imagination in my work,
          which is why I chose to become a Web Developer.
        </p>
      </div>
      {/* <img src={giacomokayak} className='foto' alt='giacomokayak' /> */}
    </div>
  );
};

export default About;
