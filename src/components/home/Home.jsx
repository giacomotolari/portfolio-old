/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import brain from '../../asset/images/brain2.gif';
import react from '../../asset/images/logos/react.png';
import css from '../../asset/images/logos/css.png';
import sass from '../../asset/images/logos/sass.png';
// import giacomo from '../../asset/images/giacomo.mp4'

const Home = () => {
  return (
    <div className='Home'>
      
      <div className='wrap' id='wrap'>
        <div className='left'>
          <div
            className='chouchin-wrap chouchin1 chouchin layer1'
            data-speed-x='40'
            data-speed-y='20'
          >
            <img src={brain} alt='...' className='chouchin' />
          </div>

          <div
            className='chouchin-wrap chouchin2 chouchin layer2'
            data-speed-x='20'
            data-speed-y='10'
          >
            <img src={react} alt='...' className='chouchin' />
          </div>

          <div
            className='chouchin-wrap chouchin3 chouchin layer3'
            data-speed-x='10'
            data-speed-y='5'
          >
            <img src={css} alt='...' className='chouchin' />
          </div>
        </div>

        <div className='right'>
          <div
            className='chouchin-wrap chouchin4 chouchin layer1'
            data-speed-x='40'
            data-speed-y='20'
          >
            <img src={sass} alt='...' className='chouchin' />
          </div>

          <div
            className='chouchin-wrap chouchin5 chouchin layer2'
            data-speed-x='20'
            data-speed-y='10'
          >
            <img
              src='https://1.bp.blogspot.com/-cEhj3_MMKi4/XQjuNuurZLI/AAAAAAABTQA/Rv_ZRt-6O0EB1sfJiLki4MXA-nOlf-DzQCLcBGAs/s800/kingyo_chouchin.png'
              alt='...'
              className='chouchin'
            />
          </div>

          <div
            className='chouchin-wrap chouchin6 chouchin layer3'
            data-speed-x='10'
            data-speed-y='5'
          >
            <img
              src='https://1.bp.blogspot.com/-cEhj3_MMKi4/XQjuNuurZLI/AAAAAAABTQA/Rv_ZRt-6O0EB1sfJiLki4MXA-nOlf-DzQCLcBGAs/s800/kingyo_chouchin.png'
              alt='...'
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
            <li className='content__container__list__item'>a web developer</li>
            <li className='content__container__list__item'>full stack</li>
            <li className='content__container__list__item'>who I am!</li>
          </ul>
        </div>
      </div>
      <section className='sectionFoto'>
        <h1>GIACOMO TOLARI</h1>

        {/* <div className='profilefoto'></div> */}
        {/* <video img={giacomo} className='profilefoto' alt='giacomo'/> */}
      </section>
    </div>
  );
};

export default Home;
