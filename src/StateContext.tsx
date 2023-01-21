import React, { createContext, useState } from "react";
import { contextInterface } from "./interface";

export const StateContext = createContext<contextInterface | null>(null);

function ContextProvider({ children }: React.PropsWithChildren<{}>) {
	const [open, setOpen] = useState<boolean>(false);
	const onClick = () => setOpen(false);

	return (
		<StateContext.Provider value={{ setOpen, open, onClick }}>
			{children}
		</StateContext.Provider>
	);
}

export default ContextProvider;
