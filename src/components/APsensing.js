import "./APsensing.css";
import logo from "../assets/apsensing.jpeg";
import React from "react";

const APsensing = () => {
  return (
    <div className="ap-base-content">
      <div className="ap-content">
        <div className="ap-ext-side">
          <div className="text">
            <div className="ap-text-header">
              <h1>Data Science Intern | Summer of 2021</h1>
            </div>
            <div className="ap-line"></div>
            <div className="ap-text-paragraph">
              <p>
                In the summer of 2021, I completed a 12 week internship with
                APSensing within the Data Science team. The focus of my
                internship was to create a web application capable of data
                visualition.
              </p>
              <p>
                Initially, I spent time creating a library of functions that
                processed hdf5 files, using libraries such as Pickle, Scipy and
                Numpy, into a format suitable to be plotted using the Python
                library Plotly.
              </p>
              <p>
                Using the Python framework Dash, I then created a web
                application to display this data in desired formats, some of
                which being Spectrograms and Time Series graphs. The app was
                conveniently automated to ensure that any new entries into the
                directory containing the raw data would be acknowledged and the
                library of processing functions would be run and the new data
                added to the app.
              </p>
              <p>
                The Data in question represented acoustic disturbances along a
                fibre optic cable. When a disturbance, known as an 'event', is
                recorded the aim is for it to be processed by a machine learning
                algorithm to identify the event. To track the capabilities of
                the algorithm it was desirable to have a way to manually
                investigate the events. The end product of my project thus
                allowed the Data Science team to analyse any given event from
                their raw data files manually.
              </p>
            </div>
            <div className="ap-line"></div>
            <div className="ap-text-header">
              <h1>Technical Skills Applied</h1>
            </div>
            <div className="ap-line"></div>
            <div className="ap-text-paragraph">
              <p>Data Science | Data Visualisation | Software Engineering</p>
              <h3>Python | Dash | Plotly | NumPy | SciPy | Pandas | OS</h3>
            </div>
          </div>
        </div>
        <div className="ap-image-side">
          <img className="ap-img" src={logo} alt="me"></img>
        </div>
      </div>
    </div>
  );
};

export default APsensing;
