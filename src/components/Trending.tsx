import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import ReactPlayer from "react-player";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import StarRatings from "react-star-ratings";
import useFetch from "../useFetch";
import LoaderExampleLoader from "./loading";

const url = "https://api.themoviedb.org/3";
const nowPlaying = `${url}/movie/now_playing`;
const topRatedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie/157336`;
const genUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;
const trendingUrl = `${url}/trending/all/day`;

export default function Trending(): JSX.Element {
	const { movies, pending }: any = useFetch(trendingUrl);

	const result = movies?.results?.map((data: any) => {
		return (
			<SwiperSlide className="swiper-card" key={data.id}>
				<img
					src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
					alt=""
				/>
				<div className="onCard">
					<div className="left">
						<div className="img">
							<img
								src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
								alt=""
							/>
						</div>
					</div>
					<div className="right">
						<h3>{data?.original_name}</h3>
						<span>{data?.first_air_date}</span>
						<p>{data.overview.substring(0, 250) + "..."}</p>
						<div className="attr">
							<span>{data?.media_type}</span>
							<span>{data?.original_language}</span>
						</div>
						<div className="buttons">
							<button
								id="load-video-button"
								onClick={() => loadVideo(data.id)}
								className="trailer"
							>
								Trailer
							</button>
							<button className="watch">Watch movie</button>
						</div>
					</div>
				</div>
			</SwiperSlide>
		);
	});

	const API_KEY = "b7d4fc779ea5fc8fa713ece60b5a4033";

	async function getVideoIdFromTMDB(movieId: string) {
		const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
		const response = await fetch(url);
		const data = await response.json();
		return data.results[0].key; //returns the first video id from the results
	}

	async function loadVideo(id: string) {
		const videoId = await getVideoIdFromTMDB(id); //get the video id from TMDB API
		const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
		window.open(videoUrl, "_blank");
	}
	console.log(movies);
	return (
		<>
			<div className="trending-section">
				<h2>Trending movies🔥</h2>

				{pending ? (
					<LoaderExampleLoader />
				) : (
					<Swiper
						centeredSlides={true}
						autoplay={{
							delay: 4500,
							disableOnInteraction: false,
						}}
						breakpoints={{
							640: {
								slidesPerView: 2,
							},
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 2,
							},
						}}
						loop={true}
						spaceBetween={20}
						slidesPerView={2}
						onSwiper={(swiper) => console.log(swiper)}
						modules={[Navigation, A11y, Autoplay]}
						navigation
						scrollbar={{ draggable: true }}
						// onSlideChange={() => console.log("slide change")}
						className="swiper-container"
					>
						{result}
					</Swiper>
				)}
			</div>
		</>
	);
}
