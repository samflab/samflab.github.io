import React, { Component } from "react";
import ProjectCard from "./cards/ProjectCard";
class ProjectWork extends Component {
  render() {
    return (
      <div className="Project" id="projects">
        <h1 className="project-header">
          Projects
        </h1>
        <ProjectCard />
      </div>
    );
  }
}

export default ProjectWork;
