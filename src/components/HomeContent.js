import "./HomeContentStyles.css";
import city from "../assets/City.jpg";
import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from "react-social-icons";

const Hero = () => {
  return (
    <div className="home-content">
      <div className="content-main">
        <h1>Find Me On</h1>
        <div className="line"></div>
        <div className="icons">
          <p className="icon-text">
            LinkedIn
            <SocialIcon
              url="https://www.linkedin.com/in/lewis-hodgson-3297b8233"
              className="button"
            />
          </p>

          <p className="icon-text">
            GitHub
            <SocialIcon url="https://github.com/LewisJH27" className="button" />
          </p>
        </div>
        <div className="line"></div>
        <h3 className="content-sub">Created By Lewis Hodgson,</h3>
        <h3 className="content-sub-sub">Hosted by GitHub Pages.</h3>
      </div>
      <div className="content-sub"></div>
    </div>
  );
};

export default Hero;
