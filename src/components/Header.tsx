import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import CustomizeIcons from "./CustomizeIcons";

function Header() {
	return (
		<div className="container">
			<ul>
				<li>Home</li>
				<li>Series</li>
				<li>Tv show</li>
			</ul>
			<CustomizeIcons>
				<IoMdNotificationsOutline />
			</CustomizeIcons>
		</div>
	);
}

export default Header;
