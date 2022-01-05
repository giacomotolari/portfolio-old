/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import projects from '../../../data/projects';
import Project from './Project';



const Projects = () => {
  return (
    <div className='Projects'>
      <div className='spaceApparition'></div>
      <section className='projectsWrapper'>
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              item={project}
              styleClass={`project${index + 1}`}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
