import React, { useContext } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import CustomizeIcons from "./CustomizeIcons";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { contextProvider } from "../StateContext";

function Header() {
	const { setOpen } = useContext(contextProvider);

	return (
		<>
			<div className="container">
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/series">Series</NavLink>
					<NavLink to="/show">Tv show</NavLink>
				</nav>
				<NavLink to="/notification" className="notify">
					<CustomizeIcons>
						<IoMdNotificationsOutline />
					</CustomizeIcons>
				</NavLink>
				<div className="menu" onClick={() => setOpen(true)}>
					<HiMenuAlt3 color="white" size={25} />
				</div>
			</div>
			<div className="menu">
				<Sidebar />
			</div>
		</>
	);
}

export default Header;
