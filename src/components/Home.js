import React, { Component } from "react";
import Intro from "./Intro";
import "../styles/Home.scss";
// import Image from 'react-bootstrap/Image'

class Home extends Component {
  render() {
    
    return (
      <div className="Home" id="home">
        <div className="container">
          <div className="header">
            <span class="subheading">Hey! I am </span>
            <h1 className="myName"> Masudha Meher !</h1>
            <h2>
              <Intro />
            </h2>
            <br />
            <h4 className="introduction">
              I am a final year post-gradute student. I like to design and develop web applications. Currently residing in Delhi, India.
            </h4>
            <br/>
            <a href="Masudha Meher Resume.pdf" type="submit" className="download-resume" download style={{textDecoration:"none", color:"white"}}>
                Download My Resume
            </a>
          </div>
          <div className="container" >
            <div className="hero-shape custom-animation" >
              <img
                src="images/dot.svg"
                alt="circle-animation"
                height="50"
                width="50"
                style={{ opacity: "0.5"}}
              />
            </div>
            <div className="image image-fluid">
              
              <img
                src="images/witch.webp"
                alt="Masudha"
                className="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
