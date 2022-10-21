import React from "react";
import ReactDOM from "react-dom/client";
import ScrollToTop from "./components/ScrollTop";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ScrollToTop />
		<App />
	</BrowserRouter>
);
