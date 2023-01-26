import React from "react";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import me from "../assets/img/EgLF6Jmi_4x.jpg";

const Footer: React.FC = () => {
	const Year = new Date().getFullYear();
	return (
		<div className="footer-section">
			<div className="container">
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
				<div className="img" title="Profile">
					<a href="https://www.frontendmentor.io/profile/Kamasah-Dickson">
						<img src={me} alt="portfolio" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
