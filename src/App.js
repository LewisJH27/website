import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Experience from "./routes/Experience";
import Project1 from "./routes/Project1";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience/apsensing" element={<Project />} />
        <Route path="experience/trulife" element={<Project1 />} />
        <Route path="experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;
