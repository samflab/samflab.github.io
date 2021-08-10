import React, { Component } from "react";
import Cards from "./cards/EducationCard";
import "../styles/Resume.scss";

class Education extends Component {
  render() {
    return (
      <div
        className="edu"
        id="education"
      >
        <h3
          style={{
            fontWeight: "700",
            marginBottom: "30px",
            fontSize: "24px",
            fontFamily: "Poppins"
          }}
        >
          Education
        </h3>
        <Cards />
      </div>
    );
  }
}
export default Education;
