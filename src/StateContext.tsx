import React, { createContext, useState } from "react";
import { contextInterface } from "./interface";

// export const ContextProvider = createContext<contextInterface | null>(null);
export const ContextProvider = createContext<contextInterface>({
	open: false,
	setOpen: () => {},
});

function StateContext({ children }: React.PropsWithChildren<{}>) {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<ContextProvider.Provider value={{ open, setOpen }}>
			{children}
		</ContextProvider.Provider>
	);
}

export default StateContext;
