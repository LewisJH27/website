import "./HeroStyles.css";
import city from "../assets/City.jpg";
import React from "react";
import { Link } from "react-scroll";
import { BsArrowDown } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-mask">
        <img className="hero-img" src={city} alt="city-buildings" />
      </div>
      <div className="hero-content">
        <p>I'm Lewis Hodgson,</p>
        <h1>Aspiring Quantitative Trader</h1>
        <div className="arrow-dom">
          <Link className="arrow" to="home-content" spy={true} smooth={true}>
            <BsArrowDown size={30} style={{ color: "#fff" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
