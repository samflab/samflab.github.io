import React from "react";
import IntroScroll from "./Intro";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div className="Home" id="home">
      <div className="container">
        <div className="header">
          <span class="subheading">Hey! I am </span>
          <h1 className="myName"> Masudha Meher !</h1>
          <h2>
            <IntroScroll />
          </h2>
          <br />
          <h4 className="introduction">
            I am a final year post-gradute student. I like to design and develop
            web applications. Currently residing in Delhi, India.
          </h4>
          <br />
          <a
            href="Masudha Meher Resume.pdf"
            type="submit"
            className="download-resume"
            download
          >
            Download My Resume
          </a>
        </div>
        <div className="container">
          <div className="hero-shape custom-animation">
            <img
              src="images/dot.svg"
              alt="circle-animation"
              height="50"
              width="50"
            />
          </div>
          <div className="image image-fluid">
            <img src="images/witch.webp" alt="Masudha" className="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
