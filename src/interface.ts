export default interface movieInterface {
	movies: string[];
	results: string;
	pending: boolean;
	error: string | null;
	message: string | null;
}

export interface contextInterface {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	onClick: () => void;
}
