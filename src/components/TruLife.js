import "./TruLife.css";
import logo from "../assets/trulife.png";
import React from "react";

const TruLife = () => {
  return (
    <div className="base-content">
      <div className="tl-content">
        <div className="tl-ext-side">
          <div className="text">
            <div className="tl-text-header">
              <h1>Scientific Programming Intern | Summer of 2022</h1>
            </div>
            <div className="tl-line"></div>
            <div className="tl-text-paragraph">
              <p>
                I completed a 12 week summer internship with TruLife Optics LTD.
                I worked directly with world leading holography researches,
                working on the future of Augmented Reality. The main goal of my
                project was to increase the usability of technical python
                scripts by integrating them into user friendly Graphical User
                Interfaces (GUI's).
              </p>
              <p>
                Through the use of the Python library Tkinter and Object
                Oriented Programming, I created a GUI software that could be
                installed on any in house device. This was incredibely useful
                for the company since anybody wishing to use the script could
                easily do so and store the results produced by the script in a
                personal output Excel file. Prior to my software, the scripts
                code would need to be manually edited to input user defined
                parameters and retrieve the results, which clearly is
                inconvenient and requires technical skills in python.
              </p>
              <p>
                After completing the inital task, I moved onto working on
                another scientific script used for analysis of spectrograms.
                Before working on a GUI for this script, the focus was to first
                optimise the script. Before my arrival, the results were read
                off plots and inputted manually into excel sheets. I re-wrote
                the script adding in a few notable features. Firstly, the script
                was automated to find and configure its own perameters required
                for any SciPy functions used. Secondly, it was automated to run
                for an arbitrary number of colours. Lastly, the capability to
                run on an entire directory of samples was implemented.
              </p>
              <p>
                Finally, I created a GUI for this second script. It allowed the
                user to easily take advantage of the new features added by
                myself in the re-written version. Notably, any user could easily
                select a directory and run the analyser on the entire directory,
                finding the results of the script automatically written and
                saved to a personal Excel output file of their choice. The
                biggest breakthrough of this software is that it saved an
                incredible amount of time, it was no longer required to find the
                optimal perameters by hand, the script could model required
                results by itself and the outputs being automatically written
                into Excel is another incredible time save.
              </p>
            </div>
            <div className="tl-line"></div>
            <div className="tl-text-header">
              <h1>Technical Skills Applied</h1>
            </div>
            <div className="tl-line"></div>
            <div className="tl-text-paragraph">
              <p>Data Analysis | Software Development | Numerical Modelling</p>
              <h3>
                Python | Tkinter | NumPy | SciPy | MatPlotLib |OpenPyXl | OS
              </h3>
            </div>
          </div>
        </div>
        <div className="tl-image-side">
          <img className="tl-img" src={logo} alt="me"></img>
        </div>
      </div>
    </div>
  );
};

export default TruLife;
