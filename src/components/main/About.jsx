/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// import giacomoDaniela from '../../../asset/images/giacomoDaniela.jpg';
import { useNavigate } from 'react-router-dom';

const About = () => {
  let navigate = useNavigate();
  return (
    <div className='About'>
      {/* <img src={giacomoDaniela} className='demo-bg' alt='giacomokayak' /> */}
      <div className='spaceApparitionAbout'></div>
      <div class='about-text'>
        <p>
          I like the idea of being able to work with people from all over the
          world, peole of different professions, knowing that I will never stop
          learning and that I will be able to use my imagination in my work,
          which is why I chose to become a Web Developer.
        </p>

        <p>
          I am a 30 year old guy from Italy (Sardinia), I love sport, music and
          cooking (more eating).
        </p>

        <p>
          I started my career at school at the age of 15, where I learned the
          basics of HTML. In 2020 I started studying again with courses on Udemy
          and Codecademy then on 01.03.2021 I started the Full Stack Web
          Developer school at DCI (Digital Career Institut) which will end on
          28.02.22.
        </p>
        <p>
          Most of the practice I have done is building web pages for friends and
          relatives that will serve them for their business and private
          purposes. The pages are still under construction, every time I learn
          something new I try to put it into these {''}
          <span onClick={() => navigate('/projects')}>pages</span>
          {''} and make them better and better.
        </p>
        <p>
          Visit my{' '}
          <a
            href='https://www.canva.com/design/DAEvPnMB4Q4/XsYZ7VDnezevjvMAM3eMrA/view?utm_content=DAEvPnMB4Q4&utm_campaign=designshare&utm_medium=link&utm_source=viewer'
            target='blank'
          >
            curriculum
          </a>{' '}
          or my{' '}
          <a href='https://www.linkedin.com/in/giacomo-tolari/' target='blank'>
            linkedin
          </a>{' '}
          profile for more details or just {''}
          <span onClick={() => navigate('/contact')}>contact</span> {''}
          me
        </p>
      </div>
    </div>
  );
};

export default About;
