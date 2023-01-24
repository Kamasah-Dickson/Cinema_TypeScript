import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import StarRatings from "react-star-ratings";
import useFetch from "../useFetch";
import PlayMovie from "./PlayMovie";

const url = "https://api.themoviedb.org/3";
const nowPlaying = `${url}/movie/now_playing`;
const topRatedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie/157336`;
const genUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;
const trendingUrl = `${url}/trending/all/day`;
const API_KEY = "b7d4fc779ea5fc8fa713ece60b5a4033";

export default function Trending(): JSX.Element {
	const { movies, pending, error }: any = useFetch(trendingUrl);
	const [movieUrl, setMovieUrl] = useState<any>([]);
	const [show, setShow] = useState<boolean>(false);
	const [movieError, setMovieError] = useState<string>("");

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

	const result = movies?.results?.map((data: any) => {
		return (
			<SwiperSlide className="swiper-card" key={data.id}>
				<img
					src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
					alt={data?.original_name}
				/>
				<div className="onCard">
					<div className="left">
						<div className="img">
							<img
								src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
								alt={data?.original_name}
							/>
						</div>
					</div>
					<div className="right">
						<h3>{data?.original_name}</h3>
						<span>{data?.first_air_date}</span>
						<p>{data.overview.substring(0, 200) + "..."}</p>
						<div className="attr">
							<span>{data?.media_type}</span>
							<span>{data?.original_language}</span>
						</div>
						<div className="buttons">
							<button
								id="load-video-button"
								onClick={() => (getVideoIdFromTMDB(data.id), setShow(true))}
								className="trailer"
							>
								Trailer
							</button>
						</div>
					</div>
				</div>
			</SwiperSlide>
		);
	});

	return (
		<>
			<PlayMovie
				show={show}
				setShow={setShow}
				movie={movieUrl}
				movieError={movieError}
				setMovieError={setMovieError}
			/>
			<div className="trending-section">
				<h2>Trending movies🔥</h2>
				{pending && (
					<p style={{ color: "white", fontSize: "25px", marginLeft: "30px" }}>
						Loading...
					</p>
				)}
				{error && <p className="error">{error}</p>}

				<Swiper
					slidesPerView={1}
					centeredSlides={true}
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					breakpoints={{
						1100: {
							slidesPerView: 2,
						},
					}}
					loop={true}
					spaceBetween={25}
					modules={[Navigation, A11y, Autoplay]}
					navigation
					scrollbar={{ draggable: true }}
					className="swiper-container"
				>
					{result}
				</Swiper>
			</div>
		</>
	);
}
