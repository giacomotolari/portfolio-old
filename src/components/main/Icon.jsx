/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

const Icon = (props) => {
  return (
    <div className="icons-wrapper">
      {/* information about the project */}
      <div className="project_icons" title={props.iconData.infoWrapperTitle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className={props.iconData.infoSVGClass}
          viewBox="0 0 16 16"
        >
          <path d={props.iconData.infoPath} />
        </svg>
      </div>
      {/* download project repository */}
      <div
        className="project_icons"
        title={props.iconData.downloadWrapperTitle}
      >
        <a href={props.project.download} download={props.project.downloadZip}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={props.iconData.downloadSVGClass}
            viewBox="0 0 16 16"
          >
            <path d={props.iconData.downloadPath} />
          </svg>
        </a>
      </div>

      {/* view project code */}
      <div
        className="project_icons"
        title={props.iconData.viewCodeWrapperTitle}
      >
        <a href={props.project.jsbinLink}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className={props.iconDataviewCodeSVGClass}
            viewBox="0 0 16 16"
          >
            <path d={props.iconData.viewCodePath} />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Icon;
