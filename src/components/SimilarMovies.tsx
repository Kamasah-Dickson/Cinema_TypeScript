import React, { useState, useContext } from "react";
import useFetch from "../useFetch";
import { contextProvider } from "../context/StateContext";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

function SimilarMovies({ id }: any) {
	const API_KEY = "b7d4fc779ea5fc8fa713ece60b5a4033";
	const SimilarMovie = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
	const { pending, movies, error }: any = useFetch(SimilarMovie);

	const { theme } = useContext(contextProvider);
	const [load, setLoad] = useState(10);

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

	const handleLoad = () => {
		setLoad((prev) => prev + 10);
	};

	return (
		<div className="similarMovies-section">
			{pending ? (
				<p style={paraStyle} className="loading">
					Loading...
				</p>
			) : error ? (
				<p className="error">{error}</p>
			) : (
				<>
					<div className="container3">
						<h2>Similar Movies🌍</h2>
						<div className="parent-container">
							{movies?.results?.slice(0, load).map((movie: any) => {
								return (
									<Link to={`/movie/${movie.id}`} key={movie.id}>
										<div className="movieCard">
											<div className="img">
												<img
													src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
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
}

export default SimilarMovies;
