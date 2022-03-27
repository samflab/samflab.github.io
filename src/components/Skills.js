import React from "react";
import { skillData } from "../details/skillDetails";


const Skills = () => {
  
    return (
      <div id="skills">
        <h3
          style={{
            fontWeight: "700",
            marginBottom: "30px",
            fontSize: "24px",
            fontFamily: "Poppins",
          }}
        >
          Skills
        </h3>
        <div className="skill-card-container">
        {skillData.map((skill) => {
          return (
            <div className="skills-plate">
              <span className="icons">{skill.icon}</span>
              <span className="skill-name">{skill.name}</span>
            </div>
          );
        })}
        </div>
      </div>
    );
  }

export default Skills;
