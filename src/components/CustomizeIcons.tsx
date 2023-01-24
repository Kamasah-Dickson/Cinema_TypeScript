import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { contextProvider } from "../context/StateContext";
interface Props {
	children: React.ReactNode;
}

export default function CustomizeIcons({ children }: Props) {
	const { theme } = useContext(contextProvider);

	const contextProps = { size: "25px" };
	return (
		<>
			<IconContext.Provider value={contextProps}>
				{children}
			</IconContext.Provider>
		</>
	);
}
