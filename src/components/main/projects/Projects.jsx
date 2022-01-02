/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import projects from '../../../data/projects';
import Project from './Project';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  let navigate = useNavigate();

  return (
    <div
      className='Projects'
      onKeyDown={() => {
        navigate('/about');
      }}
    >
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
