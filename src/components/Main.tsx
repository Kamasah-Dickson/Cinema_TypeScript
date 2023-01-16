import React from "react";

interface props {
	children: React.ReactNode;
}

const Main: React.FC<props> = ({ children }) => {
	return <>{children}</>;
};

export default Main;
