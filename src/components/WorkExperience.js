import "./WorkExperienceStyles.css";
import lenses from "../assets/lenses.jpg";
import optics from "../assets/optics.jpg";
import { Link } from "react-scroll";

import React from "react";

const WorkExperience = () => {
  return (
    <div className="work-experience">
      <div className="experience1">
        <div className="mask">
          <img className="experience1-img" src={lenses} alt="lenses" />
        </div>
        <div className="content">
          <h1>TruLife Optics</h1>
          <h3>Summer Intern</h3>
          <p>Data Analysis - Numerical Modelling - Software Engineering</p>
          <div className="button">
            <Link className="btn" to="form" spy={true} smooth={true}>
              More Info
            </Link>
          </div>
        </div>
      </div>
      <div className="experience2">
        <div className="mask">
          <img className="experience2-img" src={optics} alt="optics" />
        </div>
        <div className="content">
          <h1>AP Sensing</h1>
          <h3>Summer Intern</h3>
          <p>Data Science - Software Development</p>

          <div className="button">
            <Link className="btn btn-light" to="form" spy={true} smooth={true}>
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;