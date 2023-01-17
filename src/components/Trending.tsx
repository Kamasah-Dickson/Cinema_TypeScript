import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Trending() {
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
