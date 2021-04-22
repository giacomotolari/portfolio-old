/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Icon from './Icon.jsx';
import projects from '../data/projects.jsx';
import iconData from '../data/links/iconData.json';

const CardGroup = () => {
  return (
    <div className="card-group">
      {/* EINFACHES BEISPIEL */}

      {/* <Card
        cardData={cardData1}
        image={images.reactiontester}
        download={downloads.reactiontesterZip}
      />
      <Card
        cardData={cardData2}
        image={images.changegame}
        download={downloads.changegameZip}
      />
      <Card
        cardData={cardData3}
        image={images.flexbox}
        download={downloads.flexboxZip}
      /> */}

      {/* ADVANCED BEISPIEL */}
      {projects.map((project) => {
        return (
          <div className="project-wrapper">
            <div className="img-wrapper">
              <a href={project.imageLink}>
                <img
                  src={project.image}
                  alt={project.headerAlt}
                  className="img-project"
                />
              </a>
            </div>
            <div className="card-text-wrapper">
              <h2 className="cardTitle">{project.cardTitle}</h2>
              <h5 className="cardText">{project.cardText}</h5>
              <p className="cardMuted">{project.cardMuted}</p>
            </div>
            <Icon iconData={iconData} project={project} />


          </div>
        );
      })}
    </div>
  );
};

export default CardGroup;
