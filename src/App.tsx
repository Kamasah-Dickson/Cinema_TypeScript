import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Trending from "./components/Trending";
import TopRated from "./components/TopRated";
import ContinueWatching from "./components/ContinueWatching";

const App: React.FC = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Trending />
				<TopRated />
				<ContinueWatching />
				<Footer />
			</main>
			<aside className="aside"></aside>
		</>
	);
};

export default App;
