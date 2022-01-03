/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useRef } from 'react';
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
  const [icon1, setIcon1] = useState(false);
  const [icon2, setIcon2] = useState(false);
  const [icon3, setIcon3] = useState(false);
  const [icon4, setIcon4] = useState(false);
  const [icon5, setIcon5] = useState(false);
  const [icon6, setIcon6] = useState(false);
  const clickAlert = useRef(false);

  const hideClickAlert = () => {
    clickAlert.current.hidden = true;
  };

  return (
    <div className='Home'>
      <div className='wrap'>
        <div className='left'>
          <div
            className='chouchin1 chouchin layer1'
            data-speed-x='40'
            data-speed-y='20'
          >
            <img
              src={icon1 === false ? giacomo1 : html}
              alt='react'
              className='chouchin'
            />
          </div>
          <div
            className='chouchin2 chouchin layer2'
            data-speed-x='20'
            data-speed-y='10'
          >
            <img
              src={icon2 === false ? giacomo2 : css}
              alt='js'
              className='chouchin'
            />
          </div>

          <div
            className='chouchin3 chouchin layer3'
            data-speed-x='10'
            data-speed-y='5'
          >
            <img
              src={icon3 === false ? giacomo4 : js}
              alt='css'
              className='chouchin'
            />
          </div>
        </div>

        <div className='right'>
          <div
            className='chouchin4 chouchin layer1'
            data-speed-x='40'
            data-speed-y='20'
          >
            <img
              src={icon4 === false ? giacomo3 : react}
              alt='node'
              className='chouchin'
            />
          </div>

          <div
            className='chouchin5 chouchin layer2'
            data-speed-x='20'
            data-speed-y='10'
          >
            <img
              src={icon5 === false ? giacomo4 : node}
              alt='mongoDB'
              className='chouchin'
            />
          </div>

          <div
            className='chouchin6 chouchin layer3'
            data-speed-x='10'
            data-speed-y='5'
          >
            <img
              src={icon6 === false ? giacomo1 : mongoDB}
              alt='html'
              className='chouchin'
            />
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
          <p ref={clickAlert}>CLICK THE ICONS BELOW</p>
          <img
            onClick={() => {
              setIcon1(icon1 === false ? true : false);
              hideClickAlert();
            }}
            src={icon1 === false ? html : giacomo1}
            alt='html'
          />

          <img
            onClick={() => {
              setIcon2(icon2 === false ? true : false);
              hideClickAlert();
            }}
            src={icon2 === false ? css : giacomo2}
            alt='css'
          />
          <img
            onClick={() => {
              setIcon3(icon3 === false ? true : false);
              hideClickAlert();
            }}
            src={icon3 === false ? js : giacomo3}
            alt='js'
          />
          <img
            onClick={() => {
              setIcon4(icon4 === false ? true : false);
              hideClickAlert();
            }}
            src={icon4 === false ? react : giacomo4}
            alt='react'
          />
          <img
            onClick={() => {
              setIcon5(icon5 === false ? true : false);
              hideClickAlert();
            }}
            src={icon5 === false ? node : giacomo1}
            alt='node'
          />
          <img
            onClick={() => {
              setIcon6(icon6 === false ? true : false);
              hideClickAlert();
            }}
            src={icon6 === false ? mongoDB : giacomo2}
            alt='mongoDB'
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
