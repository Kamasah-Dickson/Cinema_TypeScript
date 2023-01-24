import "./App.scss";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Trending from "./components/Trending";
import TopRated from "./components/TopRated";
import ContinueWatching from "./components/ContinueWatching";
import Aside from "./components/Aside";
import Main from "./components/Main";
import StateContext from "./context/StateContext";
import Discovery from "./components/Discovery";
import PageNotFound from "./components/PageNotFound";
import Community from "./components/Community";
import SearchMovie from "./components/SearchMovie";
import Settings from "./components/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
	return (
		<Router>
			<div className="container">
				<StateContext>
					<header className="header">
						<Header />
					</header>
				</StateContext>
				<aside className="aside">
					<Aside />
				</aside>
				<Routes>
					<Route
						path="/"
						element={
							<main className="main">
								<Main>
									<Trending />
									<TopRated />
									<ContinueWatching />
								</Main>
							</main>
						}
					></Route>
					<Route path="/Discovery" element={<Discovery />} />
					<Route path="/Community" element={<Community />} />
					<Route path="/SearchMovies" element={<SearchMovie />} />
					<Route path="/Settings" element={<Settings />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>

				<footer className="footer">
					<Footer />
				</footer>
			</div>
		</Router>
	);
};

export default App;
