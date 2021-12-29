import React from 'react';

function Project(props) {
  const {
    title,
    description,
    // tecnologies,
    state,
    // startDate,
    gitHubUrl,
    projectUrl,
  } = props.item;
  return (
    <div className='project'>
      <div className='projectHead'>
        <a href={projectUrl}>
          <h5>{title}</h5>
        </a>

        <div className='codeIcon' title='view projectcode'>
          <a href={gitHubUrl} target='_blank' rel='noreferrer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='bi bi-code-slash'
              viewBox='0 0 16 16'
            >
              <path d='M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z' />
            </svg>
          </a>
        </div>
        {/* <div className='infoIcon' title='information about the project'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            className='bi bi-info-circle-fill'
            viewBox='0 0 16 16'
          >
            <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
          </svg>
        </div> */}
      </div>
      <a href={projectUrl} target='_blank' rel='noreferrer'>
        <div className={`projectBackground ${props.styleClass}`}></div>
      </a>
      <div className='projectFooter'>
        <p style={{ color: 'white' }}>{description}</p>
        <p>{state}</p>
      </div>
    </div>
  );
}

export default Project;
