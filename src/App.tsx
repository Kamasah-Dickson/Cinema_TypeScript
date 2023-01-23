import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Trending from "./components/Trending";
import TopRated from "./components/TopRated";
import ContinueWatching from "./components/ContinueWatching";
import Aside from "./components/Aside";
import Main from "./components/Main";
import StateContext from "./StateContext";

const App: React.FC = () => {
	return (
		<div className="container">
			<StateContext>
				<header className="header">
					<Header />
				</header>
			</StateContext>
			<aside className="aside">
				<Aside />
			</aside>
			<main className="main">
				<Main>
					<Trending />
					<TopRated />
					<ContinueWatching />
				</Main>
			</main>

			<footer className="footer">
				<Footer />
			</footer>
		</div>
	);
};

export default App;
