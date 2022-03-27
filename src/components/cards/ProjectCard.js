import React from "react";
import "../../styles/Project.scss";
import { projectDetails } from "../../details/projectDetails";

const ProjectCard = () => {
  const urlClick = (link) => window.open(link, "_blank");

  return (
    <div className="project-container ">
      {projectDetails.map((project) => {
        return (
          <div className="card-content project-card">
            <img
              variant="top"
              src={project.image}
              height="150"
              width="150"
              alt="project icon"
              className="project-icons"
            />
            <h3 className="project-title">{project.title}</h3>

            <p className="project-body">{project.body}</p>
            <p style={{ textAlign: "center", left: "0", marginTop: "10px" }}>
              <button
                className="urls"
                onClick={() => {
                  urlClick(project.demourl);
                }}
              >
                Demo
              </button>
              <button
                className="urls"
                onClick={() => {
                  urlClick(project.codeurl);
                }}
              >
                Code
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
