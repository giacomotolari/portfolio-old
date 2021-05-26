/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

const Projects = () => {
  return (
    <div className='Projects'>
      <div className='spaceApparition'></div>
      <section className='projectsWrapper'>
        <div className='project'>
          <h5>Poems</h5>
          <div className='projectBackground project1'></div>
          <div className='projectIcons'></div>
        </div>

        <div className='project'>
          <h5>Coach</h5>
          <div className='projectBackground project2'></div>
          <div className='projectIcons'></div>
        </div>
        <div className='project'>
          <h5>Project-Owner</h5>
          <div className='projectBackground project3'></div>
          <div className='projectIcons'></div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
