import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import SimilarMovies from "./SimilarMovies";
import PlayMovie from "./PlayMovie";

function SingleMovie() {
	const [movieUrl, setMovieUrl] = useState<any>([]);
	const [show, setShow] = useState<boolean>(false);
	const [movieError, setMovieError] = useState<string>("");

	const { id }: any = useParams();
	const API_KEY = "b7d4fc779ea5fc8fa713ece60b5a4033";
	const singleMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

	const { pending, movies, error }: any = useFetch(singleMovie);
	const blue = "rgba(0, 0, 255, 0.5)";
	const pink = "rgb(177, 10, 177,0.3)";

	let gradient = `linear-gradient(to top,${blue}, ${pink})`;

	const introStyle = {
		background: `${gradient},url(https://image.tmdb.org/t/p/original${movies?.backdrop_path}) center center / cover no-repeat`,
		height: "fit-content",
	};

	const paraStyle = {
		fontSize: "30px",
		display: "grid",
		alignItems: "center",
		justifyContent: "center",
	};

	async function getVideoIdFromTMDB(movieId: string) {
		try {
			const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
			const response = await fetch(url, {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "applicaton/json",
					Authorization: `Bearer ${API_KEY}`,
				},
			});
			if (!response.ok) {
				if (response.status === 404) {
					throw new Error("Movie not found.");
				} else {
					throw new Error("An error occurred while fetching the movie.");
				}
			} else {
				const data = await response.json();

				const movieLink = data?.results?.map(
					(data: string[] | any) =>
						`https://www.youtube.com/watch?v=${data.key}`
				);
				setMovieUrl(movieLink);
			}
		} catch (error: any) {
			setMovieError(error?.message);
			setShow(false);
		}
	}

	return (
		<>
			<PlayMovie
				show={show}
				setShow={setShow}
				movie={movieUrl}
				movieError={movieError}
				setMovieError={setMovieError}
			/>
			<main className="singleMovie-section">
				{pending ? (
					<p style={paraStyle} className="loading">
						Loading...
					</p>
				) : error ? (
					<p className="error" style={paraStyle}>
						{error}
					</p>
				) : (
					<div className="intro-section" style={introStyle}>
						<div className="container2">
							<div className="left-card">
								<img
									src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`}
									alt={movies?.original_name}
								/>
							</div>
							<div className="right-card">
								<h3>{movies?.original_name}</h3>
								<span>{movies?.first_air_date}</span>
								<p>{movies?.overview}</p>
								<div className="attr">
									<span>{movies?.media_type}</span>
									<span>{movies?.original_language}</span>
								</div>
								<div className="buttons">
									<button
										id="load-video-button"
										onClick={() => (
											getVideoIdFromTMDB(movies?.id), setShow(true)
										)}
										className="trailer"
									>
										Trailer
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
				<SimilarMovies id={id} />
			</main>
		</>
	);
}

export default SingleMovie;
