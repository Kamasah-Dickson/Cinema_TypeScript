export default interface movieInterface {
	movies: string[];
	results: string;
	pending: boolean;
	error: string | null;
	message: string | null;
}
export interface ratedMovies {
	backdrop_path: string;
	id: number;
	original_title: string;
	poster_path: string;
}
