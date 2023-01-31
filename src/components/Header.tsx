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
	const { setOpen, theme, setTheme, searchMovie, setMovieSearch } =
		useContext(contextProvider);

	useEffect(() => {
		theme
			? document.body.classList.add("lightMode")
			: document.body.classList.remove("lightMode");
	}, [theme]);

	const searchStyle = {
		transform: searchMovie ? "translateY(0)" : "translateY(-200px)",
		transition: "transform .3s ease",
	};

	function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.value.length >= 3) {
			setMovieSearch(e.target.value.trim());
		} else {
			setMovieSearch("");
			return;
		}
	}

	function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const input = e.currentTarget.querySelector(
			'input[type="text"]'
		) as HTMLInputElement;

		if (input) {
			const inputValue = input.value;
			handleSearch({
				target: {
					value: inputValue,
				},
			} as React.ChangeEvent<HTMLInputElement>);
		}
	}

	return (
		<>
			<div className="container">
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/series">Series</NavLink>
					<NavLink to="/show">Tv shows</NavLink>
				</nav>
				<div className="search" style={searchStyle}>
					<form className="wrapper" onSubmit={(e) => handleFormSubmit(e)}>
						<input
							type="text"
							name="search"
							onChange={(e) => handleSearch(e)}
						/>
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
