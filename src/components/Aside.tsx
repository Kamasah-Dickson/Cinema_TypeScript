import React from "react";
import { Link } from "react-router-dom";

function Aside() {
	return (
		<div className="container">
			<div className="logo">
				<h1>Cinema</h1>
			</div>
			<div className="nav_links">
				<h2>Menu</h2>
				<ul>
					<li>
						<Link to="#">Home</Link>
					</li>
					<li>
						<Link to="#">Discovery</Link>
					</li>
					<li>
						<Link to="#">Community</Link>
					</li>
					<li>
						<Link to="#">Search</Link>
					</li>
				</ul>
				<ul>
					<li>
						<Link to="#">Setting</Link>
					</li>
					<li>
						<Link to="#">Help</Link>
					</li>
					<li>
						<Link to="#">Exit</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Aside;
