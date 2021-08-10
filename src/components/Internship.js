import React, { Component } from "react";
import Card from "../components/cards/InternshipCard";
import "../styles/Resume.scss";

class Internship extends Component {
  render() {
    return (
      <div id="internship">
        <h3
          style={{
            fontWeight: "700",
            marginBottom: "30px",
            fontSize: "24px",
            fontFamily: "Poppins",
          }}
        >
          Internship
        </h3>
        <Card />{" "}
      </div>
    );
  }
}
export default Internship;
