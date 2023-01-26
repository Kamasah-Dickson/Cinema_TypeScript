import React from "react";
import useFetch from "../useFetch";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Upcoming() {
	const url = "https://api.themoviedb.org/3";
	const topRatedUrl = `${url}/movie/upcoming`;

	const { pending, movies, error }: any = useFetch(topRatedUrl);

	const styles = {
		fontSize: "30px",
		marginLeft: "30px",
	};

	const UpcomingMovie = movies?.results?.map((data: any) => {
		return (
			<SwiperSlide className="upcoming-movie" key={data.id}>
				<img
					src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
					alt={data?.original_title}
				/>

				<div className="onCard">
					<div className="left">
						<div className="img">
							<img
								src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
								alt={data?.original_title}
							/>
						</div>
					</div>
					<div className="right">
						<h3>{data?.original_title}</h3>
						<span>{data?.release_date}</span>
						<p>{data.overview.substring(0, 200) + "..."}</p>
						<div className="attr">
							<span>{data?.media_type}</span>
							<span>{data?.original_language}</span>
						</div>
						<div className="buttons">
							<button id="load-video-button" className="trailer">
								Learn More
							</button>
						</div>
					</div>
				</div>
			</SwiperSlide>
		);
	});

	return (
		<div className="upcoming-section">
			<h2>Upcoming🎉</h2>
			{pending && (
				<p style={styles} className="loading">
					Loading...
				</p>
			)}
			{error && <p className="error">{error}</p>}
			<Swiper
				className="upcoming-container"
				slidesPerView={2}
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
			>
				{UpcomingMovie}
			</Swiper>
		</div>
	);
}

export default Upcoming;
