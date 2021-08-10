import React, { Component } from "react";
import SkillsIcons from "./cards/SkillIcons";

class Skills extends Component {
  render() {
    return (
      <div id="skills">
        <h3
          style={{
            fontWeight: "700",
            marginBottom: "30px",
            fontSize: "24px",
            fontFamily: "Poppins"
          }}
        >
          Skills
        </h3>

        <SkillsIcons />
      </div>
    );
  }
}

export default Skills;
