import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import CustomizeIcons from "./CustomizeIcons";
import { NavLink } from "react-router-dom";
function Header() {
	return (
		<div className="container">
			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/series">Series</NavLink>
				<NavLink to="/show">Tv show</NavLink>
			</nav>
			<NavLink to="/notification">
				<CustomizeIcons>
					<IoMdNotificationsOutline />
				</CustomizeIcons>
			</NavLink>
		</div>
	);
}

export default Header;
