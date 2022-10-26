import "./WorkExperienceStyles.css";
import lenses from "../assets/lenses.jpg";
import optics from "../assets/optics.jpg";
import { Link } from "react-router-dom";

import React from "react";

const WorkExperience = () => {
  return (
    <div className="work-experience">
      <div className="experience1">
        {/* <div className="mask">
          <img className="experience1-img" src={lenses} alt="lenses" />
        </div> */}
        <div className="content">
          <h1>Scientific Programming Intern</h1>
          <h3>TruLife Optics</h3>

          <div className="button">
            <Link className="btn" to="/experience/trulife">
              More Info
            </Link>
          </div>
        </div>
      </div>
      <div className="experience2">
        {/* <div className="mask">
          <img className="experience2-img" src={optics} alt="optics" />
        </div> */}
        <div className="content">
          <h1>Data Science Intern</h1>
          <h3>AP Sensing</h3>

          <div className="button">
            <Link
              className="btn btn-light"
              to="/experience/apsensing"
              spy={true}
              smooth={true}
            >
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
