import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import useResize from "../useResize";

function SingleMovie() {
	const { id }: any = useParams();
	const API_KEY = "b7d4fc779ea5fc8fa713ece60b5a4033";
	const singleMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
	const { pending, movies, error }: any = useFetch(singleMovie);
	// console.log(movies);

	const { width } = useResize(400);

	return (
		<div className="singleMovie-section">
			<div className="left-card">
				<div className="onCard">
					<div className="left">
						<div className="img">
							<img
								src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`}
								alt={movies?.original_name}
							/>
						</div>
					</div>
				</div>
				<div className="right-card">
					<h3>{movies?.original_name}</h3>
					<span>{movies?.first_air_date}</span>
					<p>{movies?.overview?.substring(0, width) + "..."}</p>
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
		</div>
	);
}

export default SingleMovie;
