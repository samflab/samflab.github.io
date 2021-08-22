import React, { Component } from "react";
import {
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
} from "react-icons/fa";
import { AiFillGithub, AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-scroll";
import "../styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer" id="footer">
        <img src="images/m.svg" alt="logo" height="70" weight="70" />
        <h4 className="follow">Reach out to me at</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "50%",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://www.linkedin.com/in/masudhameher/"
            className="social-logo"
          >
            <FaLinkedinIn className="social-logo" />
          </a>
          <a href="https://www.github.com/samflab" className="social-logo">
            <AiFillGithub className="social-logo" />
          </a>
          <a href="https://samflab.medium.com" className="social-logo">
            <FaMediumM className="social-logo" />
          </a>
          <a href="https://www.twitter.com/kasturimeh" className="social-logo">
            <FaTwitter className="social-logo" />
          </a>
        </div>
        <br />
        <span>
          Made with ♡ by{" "}
          <a className="my-name" href="https://github.com/samflab/Portfolio">
            Masudha Meher
          </a>
        </span>
        <Link
          id="scrollUp"
          to="top"
          smooth={true}
          style={{ position: "fixed", zIndex: "2147483647" }}
        >
          <AiOutlineArrowUp />
        </Link>
      </div>
    );
  }
}

export default Footer;
