import React, { useContext } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { ScrollContext } from "../../Context/scroll";

function ProjectCard({ project }) {
  const { scrollChange } = useContext(ScrollContext);
  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible) {
          scrollChange("projects");
        }
      }}
    >
      <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
        <div className="project-card">
          <div className="content-wrapper">
            <img
              src={project.projectImage}
              alt=""
              className="project-card-img"
            />
            <div className="card-content">
              <div className="project-name">{project.projectName}</div>
              <div className="card-bio">{project.projectBio}</div>
            </div>
          </div>
          <div className="languages">
            <div className="languages-profile">
              <div className="languages-name">
                {project.stackList.map((stack, i) => {
                  return <span key={i}>{stack}</span>;
                })}
              </div>
            </div>
          </div>
        </div>
      </a>
    </VisibilitySensor>
  );
}

export default ProjectCard;
