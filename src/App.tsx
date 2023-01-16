import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Trending from "./components/Trending";
import TopRated from "./components/TopRated";
import ContinueWatching from "./components/ContinueWatching";
import Aside from "./components/Aside";
import AsideUpcoming from "./components/AsideUpcoming";
import Main from "./components/Main";

const App: React.FC = () => {
	return (
		<div className="container">
			<header className="header">
				<Header />
			</header>
			<aside className="aside">
				<Aside />
			</aside>
			<main className="main">
				<Main>
					<Trending />
					<TopRated />
					<ContinueWatching />
					<footer>
						<Footer />
					</footer>
				</Main>
			</main>
			<aside className="aside2">
				<h1>aside 2</h1>
				<AsideUpcoming />
			</aside>
			<footer className="footer">
				<Footer />
			</footer>
		</div>
	);
};

export default App;
