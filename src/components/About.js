import React, { Component } from "react";
import "../styles/About.css";
import { Details } from "../details/AboutDetails";

class About extends Component {
  render() {
    return (
      <div className="About" id="about">
        <div className="container">
          <div className="about-image">
            <img
              src="images/masudha-artwork.jpg"
              class="artwork"
              alt="Masudha"
              height="500"
              width="350"
            />
          </div>
          <div className="about-section" >
            <h1 className="about-header">
              About Me
              <hr className="divider" />
            </h1>

            <h3 className="about-intro">
              I’m a Frontend Developer. I have a passion for writing clean and
              modular code. I am also keen of maintaining beautiful and responsive UI.
            </h3>
            <br />
            <div className="about-details">
              {Details.map((item, index) => {
                return (
                  <li className="about-details-list" key={index}>
                    <span className="about-title">{item.title} </span>
                    <span className="title.value">{item.value} </span>
                  </li>
                );
              })}
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
