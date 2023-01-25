import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const Footer: React.FC = () => {
	return (
		<div className="footer-section">
			<div className="container">
				<div className="icons">
					<BsInstagram />
					<FiTwitter />
					<FaLinkedin />
					<ImGithub />
				</div>
			</div>
		</div>
	);
};

export default Footer;
