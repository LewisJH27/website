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
                Since Graduating from the University of Sussex with a BSc (Hons)
                Theoretical Physics , I have enrolled onto an MSc Theoretical
                Physics at King's College London.
              </p>
              <p>
                I have keen interests in Programming and Finance, undergoing two
                scientific programming focused internships in the summer of my
                penultimate and final year at Sussex.
              </p>
              <p>
                Programming is my main hobby, over the last two years alongside
                gaining professional experience through internships and research
                projects (BSc Final Year Project), I have been self teaching a
                wide range of langauges and frameworks, exploring many different
                areas in programming including; Cyber Security, Competitive
                Programming and Full stack development. Many people do not
                believe in learning 'everything', instead sticking to a niche,
                but I personally enjoy the challenge. During my internship
                projects, the benefits of having self taught in a variety of
                programming areas were evident since I could always use my
                extensive knowledge to better the final result in a way that was
                not expected of me by my supervisors.
              </p>
              <p>
                I also enjoy self teaching Mathematics and Finance, using
                University resources such as library textbooks or online
                material. I have always been fascinated by the element of chance
                in the games I played as a kid, trying to calculate the
                probability of recieveing certain in-game reward items from a
                given task. As I got older this lead me into the world of
                finance, a place where probability and statistics can be applied
                to seek out monetary gain in the real world instead.
              </p>
              <p>
                Despite my love of learning, I still find time to get up and
                stay active, being a member at my local golf club and sticking
                to a four day a week workout plan in the gym. In the future, I
                hope to apply my skills and interests into the field of
                Quantitative Finance or Software Engineering.
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
