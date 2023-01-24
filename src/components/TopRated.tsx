import React, { useState, useContext } from "react";
import useFetch from "../useFetch";
import { ratedMovies } from "../interface";
import { contextProvider } from "../context/StateContext";

function TopRated() {
	const url = "https://api.themoviedb.org/3";
	const API_KEY = "b7d4fc779ea5fc8fa713ece60b5a4033";
	const topRatedUrl = `${url}/movie/top_rated`;
	const { movies, pending, error }: any = useFetch(topRatedUrl);
	const { theme } = useContext(contextProvider);
	const [load, setLoad] = useState(10);

	const styles = {
		fontSize: "30px",
		marginLeft: "30px",
	};

	const buttonStyle = {
		backgroundColor: theme ? "white" : "black",
		color: theme ? "black" : "white",
		border: "none",
		cursor: "pointer",
	};

	const handleLoad = () => {
		setLoad((prev) => prev + 10);
	};

	return (
		<div className="top-rated-section">
			<div className="container">
				<h2>Top rated⭐</h2>
				<div className="top-rated-container">
					{pending && (
						<p style={styles} className="loading">
							Loading...
						</p>
					)}
					{error && <p className="error">{error}</p>}
					{movies?.results?.slice(0, load).map((movies: ratedMovies) => {
						return (
							<div key={movies.id} className="movie">
								<img
									src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`}
									alt={movies?.original_title}
								/>
								<p>{movies?.original_title}</p>
							</div>
						);
					})}
				</div>
				{/* alert(); */}
				{!pending && load !== movies?.results?.length && movies && (
					<button style={buttonStyle} onClick={handleLoad}>
						LoadMore
					</button>
				)}
			</div>
		</div>
	);
}

export default TopRated;
