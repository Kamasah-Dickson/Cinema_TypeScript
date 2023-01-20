import ReactPlayer from "react-player";
import { SlClose } from "react-icons/sl";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

function PlayMovie({ show, setShow, movie, movieError, setMovieError }: any) {
	const [finalMovies, setfinalMovies] = useState([]);
	const [showEvent, setPointEvent] = useState<string>("none");

	const styles = {
		PointerEvent: "showEvent",
	};

	useEffect(() => {
		if (movie.length > 0) {
			const allMovies = movie.map((data: string[]) => data);
			setfinalMovies(allMovies);
		}
	}, [movie]);

	return (
		<>
			{show && (
				<div
					className="overlay"
					onClick={() => setMovieError("")} //
				>
					{!movieError && (
						<SlClose
							onClick={() => (setShow(false), setMovieError(""))}
							className="close"
							size={40}
							aria-label="close"
							tabIndex={0}
						/>
					)}
					{movieError && (
						<>
							<p style={{ fontSize: "40px", color: "red" }}>
								Check your network and try again
							</p>
							<p
								style={{
									fontSize: "25px",
									textAlign: "center",
									color: "red",
								}}
							>
								{movieError}
							</p>
						</>
					)}
					<Swiper
						centeredSlides={true}
						breakpoints={{
							900: {
								slidesPerView: 1,
							},
							1200: {
								slidesPerView: 2,
							},
						}}
						spaceBetween={20}
						modules={[Navigation, A11y, Autoplay]}
						navigation
						scrollbar={{ draggable: true }}
						className="swiper-container2"
					>
						{!movieError &&
							finalMovies.map((data) => (
								<SwiperSlide className="slider">
									<ReactPlayer url={data} style={{ pointerEvents: "none" }} />
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			)}
		</>
	);
}

export default PlayMovie;
