import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import CustomizeIcons from "./CustomizeIcons";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
function Header() {
	return (
		<>
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
				<HiMenuAlt3 color="white" size={25} />
			</div>
			<Sidebar />
		</>
	);
}

export default Header;
