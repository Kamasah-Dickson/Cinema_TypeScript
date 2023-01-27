import React, { useEffect, useState } from "react";

function useResize(param) {
	const [width, setWidth] = useState(window.innerWidth < 400 ? 200 : 120);

	function windowResize() {
		if (window.innerWidth < param) {
			setWidth(130);
		} else {
			setWidth(200);
		}
	}
	useEffect(() => {
		window.addEventListener("resize", windowResize);
		return () => {
			window.removeEventListener("resize", windowResize);
		};
	}, [param]);

	return { width };
}

export default useResize;
