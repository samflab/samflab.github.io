import React, { Component } from "react";
import Maz from "./cards/ProjectCard";

class ProjectWork extends Component {
  render() {
    return (
      <div className="Project" id="projects">
        {" "}
        <h1 className="project-header" style={{ textAlign: "center" }}>
          Projects
        </h1>
        <hr className="project-divider" />
        <div>
          <Maz />
        </div>
      </div>
    );
  }
}

export default ProjectWork;
