import "./AboutMeContent.css";
import Me from "../assets/Me.jpg";
import React from "react";

const AboutMeContent = () => {
  return (
    <div className="page-content">
      <div className="aboutme-content">
        <div className="text-side">
          <div className="text">
            <div className="text-header">
              <h1>More About Me</h1>
            </div>
            <div className="line"></div>
            <div className="text-paragraph">
              <p>
                Since Graduating from the University of Sussex with a BSc
                Theoretical Physics, I have enrolled onto an MSc Theoretical
                Physics at King's College London.
              </p>
              <p>
                I have keen interests in Programming and Finance, undergoing two
                programming focused internships in the summer of my penultimate
                and final year at Sussex.
              </p>
              <p>
                Some hobbies I enjoy include; Body Building, playing Golf and
                learning about Ancient History. In the future I hope to delve
                into the world of Quantitative Finance.
              </p>
            </div>
            <div className="line"></div>
          </div>
        </div>
        <div className="image-side">
          <img className="img" src={Me} alt="me"></img>
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;
