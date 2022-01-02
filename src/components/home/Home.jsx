/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import js from '../../asset/images/logos/js.png';
import react from '../../asset/images/logos/react.png';
import node from '../../asset/images/logos/node2.png';
import html from '../../asset/images/logos/html2.png';
import mongoDB from '../../asset/images/logos/mongoDB.png';
import css from '../../asset/images/logos/css2.png';
import giacomo1 from '../../asset/images/giacomo5.png';
import giacomo2 from '../../asset/images/giacomo1.png';
import giacomo3 from '../../asset/images/giacomo3.png';
import giacomo4 from '../../asset/images/giacomo4.png';

const Home = () => {
  let navigate = useNavigate();

  return (
    <div
      className='Home'
      onKeyDown={() => {
        navigate('/projects');
      }}
      // onKeyUp={() => {
      //   navigate('/skills');
      // }}
    >
      <div className='wrap'>
        <div className='left'>
          <div
            className='chouchin1 chouchin layer1'
            data-speed-x='40'
            data-speed-y='20'
          >
            <img src={giacomo1} alt='react' className='chouchin' />
          </div>

          <div
            className='chouchin2 chouchin layer2'
            data-speed-x='20'
            data-speed-y='10'
          >
            <img src={giacomo2} alt='js' className='chouchin' />
          </div>

          <div
            className='chouchin3 chouchin layer3'
            data-speed-x='10'
            data-speed-y='5'
          >
            <img src={giacomo4} alt='css' className='chouchin' />
          </div>
        </div>

        <div className='right'>
          <div
            className='chouchin4 chouchin layer1'
            data-speed-x='40'
            data-speed-y='20'
          >
            <img src={giacomo3} alt='node' className='chouchin' />
          </div>

          <div
            className='chouchin5 chouchin layer2'
            data-speed-x='20'
            data-speed-y='10'
          >
            <img src={giacomo4} alt='mongoDB' className='chouchin' />
          </div>

          <div
            className='chouchin6 chouchin layer3'
            data-speed-x='10'
            data-speed-y='5'
          >
            <img src={giacomo1} alt='html' className='chouchin' />
          </div>
        </div>
      </div>

      <div className='content'>
        <div className='content__container'>
          <p className='content__container__text'>I'm</p>

          <ul className='content__container__list'>
            <li className='content__container__list__item'>Giacomo</li>
            <li className='content__container__list__item'>
              the web developer
            </li>
            <li className='content__container__list__item'>full stack</li>
            <li className='content__container__list__item'>who I am!</li>
          </ul>
        </div>
      </div>
      <section className='sectionFoto'>
        <h1>GIACOMO TOLARI</h1>

        <div className='logos'>
          <img src={js} alt='js' />
          <img src={css} alt='css' />
          <img src={mongoDB} alt='mongoDB' />
          <img src={node} alt='node' />
          <img src={html} alt='html' />
          <img src={react} alt='react' />
        </div>
      </section>
    </div>
  );
};

export default Home;
