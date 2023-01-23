import React, { PropsWithChildren, createContext, useState } from "react";

export interface toggleInterface {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
}

// export const contextProvider = createContext<toggleInterface>({
// 	setOpen:()=> {},
// 	open: true,
// });

export const contextProvider = createContext<toggleInterface>({
	open: true,
	setOpen: () => {},
});

function StateContext({ children }: PropsWithChildren) {
	const [open, setOpen] = useState<boolean>(true);

	return (
		<contextProvider.Provider value={{ open, setOpen }}>
			{children}
		</contextProvider.Provider>
	);
}

export default StateContext;
