import React, {
	PropsWithChildren,
	createContext,
	useState,
	useEffect,
} from "react";

export interface toggleInterface {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setTheme: React.Dispatch<React.SetStateAction<boolean>>;
	setSearch: React.Dispatch<React.SetStateAction<boolean>>;
	open: boolean;
	theme: boolean;
	searchMovie: boolean;
}

export const contextProvider = createContext<toggleInterface>({
	setOpen: () => {},
	setTheme: () => {},
	setSearch: () => {},
	open: false,
	theme: true,
	searchMovie: false,
});

function StateContext({ children }: PropsWithChildren) {
	const [open, setOpen] = useState<boolean>(false);
	const [searchMovie, setSearch] = useState<boolean>(false);

	const [theme, setTheme] = useState<boolean>(
		JSON.parse(localStorage.getItem("theme") || (true as any))
	);

	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(theme));
	}, [theme]);

	return (
		<contextProvider.Provider
			value={{ open, setOpen, theme, setTheme, searchMovie, setSearch }}
		>
			{children}
		</contextProvider.Provider>
	);
}

export default StateContext;
