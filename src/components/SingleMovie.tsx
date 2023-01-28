import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function SingleMovie() {
	const { id }: any = useParams();
	const API_KEY = "b7d4fc779ea5fc8fa713ece60b5a4033";
	const singleMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
	const { pending, movies, error }: any = useFetch(singleMovie);

	const blue = "rgba(0, 0, 255, 0.5)";
	const pink = "rgb(177, 10, 177,0.3)";

	let gradient = `linear-gradient(to top,${blue}, ${pink})`;

	const introStyle = {
		background: `${gradient},url(https://image.tmdb.org/t/p/original${movies?.backdrop_path}) center center / cover no-repeat`,
		height: "500px",
	};

	const paraStyle = {
		fontSize: "30px",
		"text-align": "center",
		display: "grid",
		alignItems: "center",
		justifyContent: "center",
	};

	return (
		<main className="singleMovie-section">
			<div className="intro-section" style={introStyle}>
				{pending ? (
					<p style={paraStyle} className="loading">
						Loading...
					</p>
				) : error ? (
					<p className="error" style={paraStyle}>
						{error}
					</p>
				) : (
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
									// onClick={() => (getVideoIdFromTMDB(data.id), setShow(true))}
									className="trailer"
								>
									Trailer
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</main>
	);
}

export default SingleMovie;
