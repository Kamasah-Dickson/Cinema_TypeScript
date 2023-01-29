import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import me from "../assets/img/EgLF6Jmi_4x.jpg";

const Footer: React.FC = () => {
	const Year = new Date().getFullYear();
	return (
		<div className="footer">
			<div className="container">
				<div className="left">
					<Link to="/">Home</Link>
					<Link to="/discovery">Discovery</Link>
					<Link to="/community">Community</Link>
					<Link to="/searchmovies">Search</Link>
					<Link to="/settings">Settings</Link>
					<Link to="/help">Help</Link>
					<Link to="/exit">Exit</Link>
				</div>
				<div className="right">
					<div className="icons">
						<a href="https://mail.google.com/mail/?view=cm&fs=1&to=kamasahdickson19@gmail.com">
							<MdOutlineMarkEmailUnread size={25} />
						</a>

						<a href="https://twitter.com/Kamas_DEV">
							<FiTwitter size={25} />
						</a>
						<a href="https://www.linkedin.com/in/kamasah-dickson-8506a6230/">
							<FaLinkedin size={25} />
						</a>
						<a href="https://github.com/Kamasah-Dickson">
							<ImGithub size={25} />
						</a>
					</div>
					<p>{`© ${Year} Cinema🍟 by  Kamasah Dickson`}</p>
					<p>All rights reserved.😂</p>
					<div className="img" title="Profile">
						<a href="https://www.frontendmentor.io/profile/Kamasah-Dickson">
							<img src={me} alt="portfolio" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
