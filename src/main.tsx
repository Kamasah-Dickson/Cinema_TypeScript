import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import MovieDetails from "./components/MovieDetails";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/movie/:id" element={<MovieDetails />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
