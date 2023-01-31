import React, { useContext, useState } from "react";
import useFetch from "../useFetch";
import { contextProvider } from "../context/StateContext";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const SearchMovie = () => {
	const { theme, search } = useContext(contextProvider);
	const API_KEY = "b7d4fc779ea5fc8fa713ece60b5a4033";
	const url = "https://api.themoviedb.org/3";

	const paraStyle = {
		fontSize: "30px",
		display: "grid",
		alignItems: "center",
		justifyContent: "center",
	};
	const buttonStyle = {
		backgroundColor: theme ? "white" : "black",
		color: theme ? "black" : "white",
		border: "none",
		cursor: "pointer",
	};

	// if (!search) return;

	const SimilarMovie = `${url}/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`;
	const { pending, movies, error }: any = useFetch(SimilarMovie);
	const [load, setLoad] = useState(10);

	const handleLoad = () => {
		setLoad((prev) => prev + 10);
	};

	return (
		<div className="similarMovies-section">
			{!search ? (
				<p style={paraStyle} className="loading">
					Search your favorite movie🌎
				</p>
			) : pending ? (
				<p style={paraStyle} className="loading">
					Loading...
				</p>
			) : error ? (
				<p className="error">Network Error</p>
			) : !movies?.results?.length ? (
				<p className="error">Could not find Movie</p>
			) : (
				<>
					<div className="container3" style={{ marginTop: "30px" }}>
						<h2>Similar Movies🌍</h2>
						<div className="parent-container">
							{movies?.results?.slice(0, load).map((movie: any) => {
								return (
									<Link to={`/movie/${movie.id}`} key={movie.id}>
										<div className="movieCard">
											<div className="img">
												<img
													src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
													alt={movie?.original_name}
												/>
											</div>
											<div className="content">
												<h3>{movie?.original_title}</h3>
												<span>{movie?.release_date}</span>
												<span className="rate">
													Vote Average:
													{movie?.vote_average >= 5 ? (
														<>
															{movie?.vote_average}
															<AiFillStar size={20} color="gold" />
															<AiFillStar size={20} color="gold" />
															<AiFillStar size={20} color="gold" />
															<AiFillStar size={20} color="gold" />
															<AiFillStar size={20} color="gold" />
														</>
													) : movie?.vote_average >= 3 ? (
														<>
															{movie?.vote_average}
															<AiFillStar size={20} color="gold" />
															<AiFillStar size={20} color="gold" />
															<AiFillStar size={20} color="gold" />
														</>
													) : movie?.vote_average >= 2 ? (
														<>
															{movie?.vote_average}
															<AiFillStar size={20} color="gold" />
															<AiFillStar size={20} color="gold" />
														</>
													) : (
														movie?.vote_average
													)}
												</span>
												<span>Vote Count: {movie?.vote_count}</span>
											</div>
										</div>
									</Link>
								);
							})}
						</div>
						{!pending &&
							load !== movies?.results?.length &&
							movies &&
							!error && (
								<button style={buttonStyle} onClick={handleLoad}>
									Load More
								</button>
							)}
					</div>
				</>
			)}
		</div>
	);
};

export default SearchMovie;
