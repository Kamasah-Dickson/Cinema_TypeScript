import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BiHomeCircle, BiSearch } from "react-icons/bi";
import CustomizeIcons from "./CustomizeIcons";
import { FaRegCompass } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { AiOutlineCloud } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { BiExit } from "react-icons/bi";
import Logo from "../assets/img/EgLF6Jmi_4x.jpg";
import StateContext from "../StateContext";
import { ContextProvider } from "../StateContext";

function Sidebar() {
	const { open } = useContext(ContextProvider);
	// console.log(open);
	return (
		<StateContext>
			<div className="sidebar">
				<div className="container">
					<div className="logo">
						<h1>Cinema</h1>
						<h2>🍟</h2>
					</div>
					<div className="close">
						<MdOutlineClose color="white" size={30} />
					</div>
					<div className="nav_links">
						<h2>Menu</h2>
						<nav className="first-nav">
							<NavLink to="/">
								<CustomizeIcons>
									<BiHomeCircle size="20" />
								</CustomizeIcons>
								<p>Home</p>
							</NavLink>

							<NavLink to="/discovery">
								<CustomizeIcons>
									<FaRegCompass size="20" />
								</CustomizeIcons>
								<p>Discovery</p>
							</NavLink>

							<NavLink to="/community">
								<CustomizeIcons>
									<IoIosPeople size="20" />
								</CustomizeIcons>
								<p>Community</p>
							</NavLink>

							<NavLink to="/search">
								<CustomizeIcons>
									<BiSearch size="20" />
								</CustomizeIcons>
								<p>Search</p>
							</NavLink>
						</nav>
						<nav>
							<NavLink to="/settings">
								<CustomizeIcons>
									<MdOutlineSettingsSuggest size="20" />
								</CustomizeIcons>
								<p>Settings</p>
							</NavLink>

							<NavLink to="/help">
								<CustomizeIcons>
									<AiOutlineCloud size="20" />
								</CustomizeIcons>
								<p>Help</p>
							</NavLink>

							<NavLink to="/exit">
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
		</StateContext>
	);
}

export default Sidebar;
