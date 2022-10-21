import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import AboutMeContent from "../components/AboutMeContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <AboutMeContent />
      <Footer />
    </div>
  );
};

export default About;
