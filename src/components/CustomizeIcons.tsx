import React from "react";
import { IconContext } from "react-icons";

interface Props {
	children: React.ReactNode;
}

export default function CustomizeIcons({ children }: Props) {
	const contextProps = { color: "white", size: "25px" };
	return (
		<>
			<IconContext.Provider value={contextProps}>
				{children}
			</IconContext.Provider>
		</>
	);
}
