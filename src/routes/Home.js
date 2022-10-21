import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";
const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<HomeContent />
			<Footer />
		</div>
	);
};

export default Home;
