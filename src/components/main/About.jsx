/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// import giacomoDaniela from '../../../asset/images/giacomoDaniela.jpg';
import { useNavigate } from 'react-router-dom';

const About = () => {
  let navigate = useNavigate();
  return (
    <div className='About'>
      <div className='spaceApparitionAbout'></div>
      <div class='about-text'>
        <p>
          I like the idea of being able to work with people from all over the
          world and people with different professions. To keep learning and
          using my imagination in my work has always been my dream, which is why
          I chose to become a Web Developer.
        </p>
        <p>
          Besides my tech fanaticism, I am a normal 30 years young man and
          originally from Italy (Sardinia) and I would describe myself as a
          sporty and creative person who loves to cook (and eat).
        </p>
        <p>
          I started my programming career at school at the age of 15, where I
          learned the basics of HTML. In 2020, I decided to study again by
          accomplishing courses in Udemy and Codecademy. Within the near future,
          I will be graduating from the Full Stack Web Developer course at DCI
          (Digital Career Institut), where I gained fundamental expertise for my
          digital career path.
        </p>
        <p>
          Most of the practice I have done is building web pages for friends and
          relatives that will serve them for their business and private
          purposes. The pages are still under construction. However, every time
          I learn something new I improve the {''}
          <span onClick={() => navigate('/projects')}>pages</span>
          {''} and build them into a better version.
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
          me.
        </p>
      </div>
    </div>
  );
};

export default About;
