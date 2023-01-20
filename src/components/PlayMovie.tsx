import ReactPlayer from "react-player";
import { SlClose } from "react-icons/sl";
import { CircleLoader } from "react-spinners";
import { useState } from "react";
import React from "react";

function PlayMovie({ show, setShow, movie, movieError }: any) {
	console.log(movieError);
	return (
		<>
			{show && (
				<div className="overlay" onClick={() => setShow(false)}>
					<div className="trailer">
						{!movieError && (
							<SlClose
								onClick={() => setShow(false)}
								className="close"
								size={40}
								aria-label="close"
								tabIndex={0}
							/>
						)}
						{movieError && (
							<p style={{ fontSize: "40px", color: "red" }}>
								Check your network and try again
							</p>
						)}
						<ReactPlayer url={movie} color="white" />
					</div>
				</div>
			)}
		</>
	);
}

export default PlayMovie;
