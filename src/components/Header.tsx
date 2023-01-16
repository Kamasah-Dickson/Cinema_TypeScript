import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import CustomizeIcons from "./CustomizeIcons";
import { NavLink } from "react-router-dom";
function Header() {
	return (
		<div className="container">
			<ul>
				<li>Home</li>
				<li>Series</li>
				<li>Tv show</li>
			</ul>
			<NavLink to="/notification">
				<CustomizeIcons>
					<IoMdNotificationsOutline />
				</CustomizeIcons>
			</NavLink>
		</div>
	);
}

export default Header;
