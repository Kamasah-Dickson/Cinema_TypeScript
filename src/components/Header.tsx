import React, { useContext, useEffect } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { contextProvider } from "../context/StateContext";
import { BiSearchAlt } from "react-icons/bi";

import CustomizeIcons from "./CustomizeIcons";
import Sidebar from "./Sidebar";

function Header() {
	const { setOpen, theme, setTheme } = useContext(contextProvider);

	useEffect(() => {
		theme
			? document.body.classList.add("lightMode")
			: document.body.classList.remove("lightMode");
	}, [theme]);

	return (
		<>
			<div className="container">
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/series">Series</NavLink>
					<NavLink to="/show">Tv shows</NavLink>
				</nav>
				<div className="search">
					<form className="wrapper">
						<input type="text" />
						<BiSearchAlt size={25} />
					</form>
				</div>
				<div className="group-icons">
					<NavLink to="/notification" className="notify">
						<CustomizeIcons>
							<IoMdNotificationsOutline />
						</CustomizeIcons>
					</NavLink>
					<div className="theme" onClick={() => setTheme((prev) => !prev)}>
						{!theme ? (
							<MdOutlineLightMode color="white" size={25} />
						) : (
							<MdDarkMode size={25} />
						)}
					</div>
					<div className="menu" onClick={() => setOpen(true)}>
						<HiMenuAlt3 color={theme ? "black" : "white"} size={25} />
					</div>
				</div>
			</div>
			<div className="menu">
				<Sidebar />
			</div>
		</>
	);
}

export default Header;
