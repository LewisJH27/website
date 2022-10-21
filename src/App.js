import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Experience from "./routes/Experience";

import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Routes>
				
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='projects' element={<Project />} />
				<Route path='experience' element={<Experience />} />
			</Routes>
		</>
	);
}

export default App;
