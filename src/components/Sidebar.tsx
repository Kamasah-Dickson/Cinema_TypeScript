import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BiHomeCircle, BiSearch } from "react-icons/bi";
import CustomizeIcons from "./CustomizeIcons";
import { FaRegCompass } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineCloud } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

import { MdOutlineSettingsSuggest } from "react-icons/md";
import { BiExit } from "react-icons/bi";
import Logo from "../assets/img/EgLF6Jmi_4x.jpg";
import { contextProvider } from "../context/StateContext";
import { useLocation } from "react-router-dom";

function Sidebar({ focus }: any) {
	const { open, setOpen, theme } = useContext(contextProvider);
	const { setSearch, searchMovie } = useContext(contextProvider);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/searchmovies") {
			setSearch(true);
			focus.current.focus();
		} else {
			setSearch(false);
		}
	}, [location.pathname]);

	return (
		<div className={`sidebar ${open && "show"}`}>
			<div className="container">
				<div className="logo">
					<h1>Cinema</h1>
					<h2>🍟</h2>
				</div>
				<div className="close" onClick={() => setOpen(false)}>
					<MdOutlineClose color={theme ? "black" : "white"} size={30} />
				</div>
				<div className="nav_links">
					<h2>Menu</h2>
					<nav className="first-nav">
						<NavLink to="/" onClick={() => setOpen(false)}>
							<CustomizeIcons>
								<BiHomeCircle size="20" />
							</CustomizeIcons>
							<p>Home</p>
						</NavLink>

						<NavLink to="/discovery" onClick={() => setOpen(false)}>
							<CustomizeIcons>
								<FaRegCompass size="20" />
							</CustomizeIcons>
							<p>Discovery</p>
						</NavLink>

						<NavLink to="/community" onClick={() => setOpen(false)}>
							<CustomizeIcons>
								<IoIosPeople size="20" />
							</CustomizeIcons>
							<p>Community</p>
						</NavLink>
						<NavLink to="/notification" onClick={() => setOpen(false)}>
							<CustomizeIcons>
								<IoMdNotificationsOutline size="20" />
							</CustomizeIcons>
							<p>Notifications</p>
						</NavLink>

						<NavLink to="/searchmovies" onClick={() => setOpen(false)}>
							<CustomizeIcons>
								<BiSearch size="20" />
							</CustomizeIcons>
							<p>Search</p>
						</NavLink>
					</nav>
					<nav>
						<NavLink to="/settings" onClick={() => setOpen(false)}>
							<CustomizeIcons>
								<MdOutlineSettingsSuggest size="20" />
							</CustomizeIcons>
							<p>Settings</p>
						</NavLink>

						<NavLink to="/help" onClick={() => setOpen(false)}>
							<CustomizeIcons>
								<AiOutlineCloud size="20" />
							</CustomizeIcons>
							<p>Help</p>
						</NavLink>

						<NavLink to="/exit" onClick={() => setOpen(false)}>
							<CustomizeIcons>
								<BiExit size="20" />
							</CustomizeIcons>
							<p>Exit</p>
						</NavLink>
					</nav>
					<div className="userLogged">
						<div className="left">
							<a href="https://github.com/Kamasah-Dickson">
								<div className="img">
									<img src={Logo} alt="user image" />
								</div>
							</a>
						</div>
						<div className="right">
							<a href="https://github.com/Kamasah-Dickson">
								<h3>Kamasah Dickson</h3>
							</a>
							<span>kamasahdickson19@gmail.com</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
