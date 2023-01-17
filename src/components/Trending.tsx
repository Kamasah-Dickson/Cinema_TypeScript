// import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// import StarRatings from "react-star-ratings";
import useFetch from "../useFetch";

const url = "https://api.themoviedb.org/3";
const nowPlaying = `${url}/movie/now_playing`;
const topRatedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const genUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;
const trendingUrl = `${url}/trending/all/day`;

export default function Trending(): JSX.Element {
	const { movies }: any = useFetch(trendingUrl);

	const result = movies?.results?.map((data: any) => {
		return (
			<SwiperSlide className="swiper-card" key={data.id}>
				<img
					src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
					alt=""
				/>
			</SwiperSlide>
		);
	});

	return (
		<div className="trending-section">
			<h2>Trending movies🔥</h2>
			<Swiper
				centeredSlides={true}
				autoplay={{
					delay: 2500,
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
				onSlideChange={() => console.log("slide change")}
				className="swiper-container"
			>
				{result}
			</Swiper>
		</div>
	);
}
