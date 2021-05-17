/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

const Home = () => {
  return (
    <div className='Home'>
      <section className='sectionText'>
        <div class='home-text'>
          <p>
            Hello everyone! <br />
            <br />
            <br /> I am Giacomo a student of DCI and I want to become a good Web
            Developer. <br />
            In this page I will introduce myself, my skills and my projects.
          </p>
        </div>

        {/* <h3>WEB DEVELOPER</h3>
          <h3>GIACOMO TOLARI</h3> */}
      </section>

      <section className='sectionFoto'>
        <h1>GIACOMO TOLARI</h1>

        <div className='profilefoto'></div>
      </section>
    </div>
  );
};

export default Home;
