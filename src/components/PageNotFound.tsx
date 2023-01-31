import React from "react";
import { Link } from "react-router-dom";
import { BiHomeCircle } from "react-icons/bi";

const PageNotFound = () => {
	return (
		<div className="section">
			<div className="container">
				<h1> Sorry Page not found🚩</h1>
				<Link to="/">
					<button className="back-home">
						<BiHomeCircle size="20" />
						<p>Home</p>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default PageNotFound;
