import React, { Component } from "react";
import "./About.css";
import { Details } from "./Details.js";

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <div className="container">
          <div className="about-image">
            <img
              src="images/masudha-artwork.jpg"
              alt="Masudha"
              height="350"
              width="250"
            />
          </div>
          <div className="about-section" >
            <h1 className="about-header">
              About Me
              <hr className="divider" />
            </h1>

            <h3 className="about-intro">
              I’m a Front End Developer. I have a passion for writing clean and
              modular code. I am also keen of maintaining beautiful,
              interactive, minimalistic, responsive and user-friendly UI.
            </h3>
            <br />
            <ul className="about-details">
              {Details.map((item, index) => {
                return (
                  <li className="about-details-list" key={index}>
                    <span className="about-title">{item.title} </span>
                    <span className="title.value">{item.value} </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
