import "./AboutMeStyles.css";
import stocks1 from "../assets/stocks1.jpg";
import { Link } from "react-scroll";
import { BsArrowDown } from "react-icons/bs";

import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="about">
        <div className="mask">
          <img className="about-img" src={stocks1} alt="stock-sheet" />
        </div>
        <div className="content">
          <h1>About Me</h1>
          <p>
            I'm a Post Graduate student at <mark>King's College London</mark>{" "}
            Studying Theoretical Physics.
          </p>
          <div className="arrow-dom">
            <Link className="arrow" to="page-content" spy={true} smooth={true}>
              <BsArrowDown size={30} style={{ color: "#fff" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
