import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

export default function Trending() {
	const [movies, setMovies] = useState([]);

	async function getData() {
		// const response = axios.get()
	}

	useEffect(() => {}, []);

	return (
		<div className="trending-section">
			<h2>Trending movies🔥</h2>
			<Swiper>
				<SwiperSlide>
					<div className="box"></div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
